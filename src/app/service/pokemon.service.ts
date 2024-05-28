import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { PokemonListResponse } from '../interfaces/pokemonListResponse.interface';
import { PokemonInfo } from '../interfaces/pokemonInfo.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = "https://pokeapi.co/api/v2/pokemon/"

  constructor(private http: HttpClient) { }

  getPokemonList(offset = 0, limit = 20): Observable<PokemonListResponse>{
    const url = `${this.apiUrl}?offset=${offset}&limit=${limit}`;
    return this.http.get<PokemonListResponse>(url).pipe(
      map(response => ({
        ...response,
        results: response.results.map(pokemon => ({
          ...pokemon,
          id: this.extractIdFromUrl(pokemon.url)
        }))
      }))
    );
  }

  private extractIdFromUrl(url: string): number {
    const parts = url.split('/');
    return +parts[parts.length - 2];
  }

  getOnePokemon(id:number): Observable<PokemonInfo>{
    const url = `${this.apiUrl}${id}`;
    return this.http.get<PokemonInfo>(url).pipe(
      map((response) => ({
        name:response.name,
        types:response.types,
        stats:response.stats,
        sprites:response.sprites,
      }))
    )
  }
}
