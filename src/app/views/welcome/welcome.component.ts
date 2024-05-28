import { Component, OnInit } from '@angular/core';
import { pokemonList } from 'src/app/interfaces/pokemonList.interface';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  pokemonList: pokemonList[] = [];
  currentPage = 1;
  limit = 20;

  constructor(private pokemonService: PokemonService){  }

  ngOnInit() {
    this.getpokemon();
  }

  getpokemon(){
    const offset = (this.currentPage - 1) * this.limit;
    this.pokemonService.getPokemonList(offset, this.limit)
  .subscribe(response => {
    this.pokemonList = response.results;
    })
  }

  pageChange(newPage: number){
    this.currentPage = newPage;
    this.getpokemon();
  }


}
