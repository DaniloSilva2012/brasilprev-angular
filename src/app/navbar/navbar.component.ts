import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PokemonService } from '../api.service';
import { Pokemon } from './pokemon';

import { PokemonsListComponent } from '../pokemons-list/pokemons-list.component'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [PokemonsListComponent]
})
export class NavbarComponent implements OnInit {

  private pokemonList:any;
  pokemons: Pokemon[];
  results: any[];
  queryField = new FormControl();

  @Input('value') searchValue : string = '';

  constructor(private comp: PokemonsListComponent, private service: PokemonService, ) { }

  ngOnInit() {}

  filterPokemons () {
    return this.getPokemonsList(this.queryField.value);
  }

  getPokemonsList (name: string|null) {
    let that = this;
    this.service.list(name)
      .subscribe(data => {
        that.results = data.cards.filter(card => card.supertype === 'Pokémon');
      });
  }

  clearResults () {
    this.results = []
  }

}
