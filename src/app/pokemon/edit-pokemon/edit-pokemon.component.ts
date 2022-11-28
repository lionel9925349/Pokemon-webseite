import { PokemonService } from './../pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from './../pokemon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-pokemon',
  template: `
  <h2> Editer {{pokemon?.name}}</h2>
  <p class="center">
    <img [src]="pokemon?.picture"]>
  </p>
  <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"]> </app-pokemon-form>
  `,
  styles: [
  ]
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon| undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemonService.getPokemonById(+pokemonId).subscribe(pokemon => this.pokemon = pokemon);
    }else{
      this.pokemon = undefined;
    }
  }

}
