import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { PokemonListResponse } from '../interfaces/pokemonListResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = "https://pokeapi.co/api/v2/pokemon/"

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<PokemonListResponse>{
    const url = this.apiUrl;
    return this.http.get<PokemonListResponse>(url);
  }
}
