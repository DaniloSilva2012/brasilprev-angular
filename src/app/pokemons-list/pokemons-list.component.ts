import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';

import { PokemonService } from '../api.service';
import { Pokemon } from './pokemon';


@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss']
})
export class PokemonsListComponent implements OnInit {

  //pokemons$ = new BehaviorSubject(undefined);
  pokemons: Pokemon[];

  constructor(private service: PokemonService, private zone:NgZone, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.getPokemonsList(null);
  }

  getPokemonsList (name: string|null) {
    let that = this;
    this.service.list(name)
      .subscribe(data => {
        that.pokemons = data.cards.filter(card => card.supertype === 'Pokémon').sort(that.arraySort);
        that.cdr.detectChanges();
      });
  }

  arraySort(a: any, b: any){
    return (a.name < b.name ? -1 : (a.name > b.name ? 1 : 0));
  }
}
