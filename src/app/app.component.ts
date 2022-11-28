import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './pokemon/mock-pokemon-list';
import { Pokemon } from './pokemon/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  ngOnInit(){
    console.table(this.pokemonList);
  }

  selectPokemont(pokemonId: Pokemon){
    const pokemon: Pokemon | undefined  = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    if(pokemon){
      console.log(`Vous avez demandez le pokemon ${pokemon.name}`)
      this.pokemonSelected = pokemon;
    }else{
      console.log(`vous avez demandez un pokemon inexistant`);
      

    }
  }
}
