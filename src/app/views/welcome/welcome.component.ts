import { Component } from '@angular/core';
import { pokemonList } from 'src/app/interfaces/pokemonList.interface';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  pokemonList: pokemonList[] = [
    {name:'bulbasur'}, {name:'charizard'}, {name:'bulbasur'}, {name:'charizard'}, {name:'bulbasur'}, {name:'charizard'}, {name:'bulbasur'}, {name:'charizard'},
  {name:'bulbasur'}, {name:'charizard'}, {name:'bulbasur'}, {name:'charizard'}, {name:'bulbasur'}, {name:'charizard'},{name:'charizard'}, {name:'bulbasur'},{name:'charizard'}, {name:'bulbasur'},{name:'charizard'}, {name:'bulbasur'},
  {name:'bulbasur'}, {name:'charizard'}, {name:'bulbasur'}, {name:'charizard'}, {name:'bulbasur'}, {name:'charizard'}, {name:'bulbasur'}, {name:'charizard'},
  {name:'bulbasur'}, {name:'charizard'}, {name:'bulbasur'}, {name:'charizard'}, {name:'bulbasur'}, {name:'charizard'},{name:'charizard'}, {name:'bulbasur'},{name:'charizard'}, {name:'bulbasur'},{name:'charizard'}, {name:'bulbasur'},
  {name:'bulbasur'}, {name:'charizard'}, {name:'bulbasur'}, {name:'charizard'}, {name:'bulbasur'}, {name:'charizard'}, {name:'bulbasur'}, {name:'charizard'},
  {name:'bulbasur'}, {name:'charizard'}, {name:'bulbasur'}, {name:'charizard'}, {name:'bulbasur'}, {name:'charizard'},{name:'charizard'}, {name:'bulbasur'},{name:'charizard'}, {name:'bulbasur'},{name:'charizard'}, {name:'bulbasur'},
];
}
