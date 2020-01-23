import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators'
import { Pokemon } from './pokemons-list/pokemon';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly APILISTURL = 'https://api.pokemontcg.io/v1/cards?count=50';
  private readonly APIPOKEMONURL = 'https://api.pokemontcg.io/v1/cards?id=';

  constructor(private http: HttpClient) { }

  list (name: string|null) {
    return this.http.get<Pokemon[]>(`${this.APILISTURL}${name ? '&name=' + name : ''}`)
            .pipe(
              tap(console.log)
            )
  }

  getPokemon (id: string) {
    return this.http.get<Pokemon[]>(`${this.APIPOKEMONURL}${id}`)
            .pipe(
              tap(console.log)
            )
  }
}
