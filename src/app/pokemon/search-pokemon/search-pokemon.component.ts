import { Router } from '@angular/router';
import { Pokemon } from './../pokemon';
import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styles: [
  ]
})
export class SearchPokemonComponent implements OnInit {

  searchTermms = new Subject<string>();
  Pokemon$: Observable<Pokemon[]>;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  search(term : string){

  }

  goToDetail(pokemon : Pokemon){
    const link =['/pokemon',pokemon.id];
    this.router.navigate(link)

  }

}
