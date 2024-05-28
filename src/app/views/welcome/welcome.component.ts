import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokemonInfo, PokemonTypeInfo } from 'src/app/interfaces/pokemonInfo.interface';
import { pokemonList } from 'src/app/interfaces/pokemonList.interface';
import { PokemonModal } from 'src/app/interfaces/pokemonModal.interface';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, OnDestroy {
  pokemonList: pokemonList[] = [];
  currentPage = 1;
  limit = 20;
  numberPokedex = 0;
  pokemon: PokemonModal = { 
    img: '',
    name: '', 
    types: [], 
    stats: [] 
  };
  pokemonSubScription: Subscription[] = [];

  constructor(private pokemonService: PokemonService){  }

  ngOnInit() {
    this.getPokemon();
  }

  ngOnDestroy(): void {
    this.pokemonSubScription.forEach( sub => sub.unsubscribe() )
  }

  getPokemon(){
    const offset = (this.currentPage - 1) * this.limit;
    const sub = this.pokemonService.getPokemonList(offset, this.limit)
  .subscribe(response => {
    this.pokemonList = response.results;
    })
    this.pokemonSubScription.push(sub)
  }

  onePokemon(numberPokemon: number){
    this.numberPokedex = numberPokemon;
    const sub =this.pokemonService.getOnePokemon(numberPokemon)
    .subscribe(response => {
      this.assignValues(response)
      this.openDialog(this.pokemon)
    })
    this.pokemonSubScription.push(sub)
  }

private assignValues(response:PokemonInfo){
    this.pokemon.name = response.name,
    this.pokemon.img = response.sprites.front_default,
    this.pokemon.types = response.types.map((type: PokemonTypeInfo) => type.type.name);
    this.pokemon.stats = response.stats.map(stat => ({
      base_stat: stat.base_stat,
      name: stat.stat.name
    }));
  }

  pageChange(newPage: number){
    this.currentPage = newPage;
    this.getPokemon();
  }

  openDialog(pokemon: PokemonModal): void {
    this.pokemon = pokemon;
  }
}
