import { Component } from '@angular/core';
import { pokemonList } from 'src/app/interfaces/pokemonList.interface';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  pokemonList: pokemonList[] = [];

constructor(private pokemonService: PokemonService){  }

ngOnInit() {
  this.getpokemon();
}

getpokemon(){
  this.pokemonService.getPokemonList()
  .subscribe(response => {
    this.pokemonList = response.results
  })
}
}
