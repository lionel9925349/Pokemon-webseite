import { Router } from '@angular/router';
import { Pokemon } from './../pokemon';
import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon;
  types: string[] ;
  constructor(
    private pokemonService: PokemonService,
    private route: Router
    ) { }

  ngOnInit(): void {
   // this.types = this.pokemonService.getPokemonList();

  }

  hasType(type: string){
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string){
    const isChecked = ($event.target as HTMLInputElement).checked;

    if(isChecked){
      this.pokemon.types.push(type);
    }else{
      const index = this.pokemon.types.indexOf(type);
    }
  }

  onSubmit(){
    console.log('Submit form!');
    this.route.navigate(['/pokemon',this.pokemon.id]);
  }

  isTypesValid(type: string): boolean{

    if(this.pokemon.types.length == 1 && this.hasType(type)){
      return false;
    }

    if(this.pokemon.types.length > 2 && !this.hasType(type)){
      return false;
    }

    return true;
  }

}
