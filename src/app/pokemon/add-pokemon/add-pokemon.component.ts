import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-pokemon',
  template: `
   <h2 class="center"> Ajouter un pokemon </h2>
   <app-pokemon-form [pokemon]="pokemon"]></app-pokemon-form>
  styles: [
  ]
})
export class AddPokemonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}
