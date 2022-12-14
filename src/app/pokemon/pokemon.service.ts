import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) {

  }

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))

    );

  }
  getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  addPokemon(pokemon: Pokemon ): Observable<null> {

    const httpOptions = {
      Headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post('api/pokemons', pokemon).pipe(
     
      catchError((error) => this.handleError(error, null))
      
    );

  }

  private log(response: Pokemon[] | Pokemon | undefined) {
    console.log(response)
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }



  deletePokemonById(pokemonId: number): Observable<null> {

    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      catchError((error) => this.handleError(error, []))
    );
  }

  getPokemonTypeList(): string[] {
    return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'poison', 'Fee', 'Vol', 'Combat', 'Psy']
  }
}
