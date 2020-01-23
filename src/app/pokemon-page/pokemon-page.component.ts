import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from './pokemon';
import { PokemonService } from '../api.service';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss']
})
export class PokemonPageComponent implements OnInit {

  card : Pokemon[];
  attacksProps: string[] = ['cost', 'name', 'damage', 'convertedEnergyCost'];
  weaknessesProps: string[] = ['type', 'value'];
  resistancesProps: string[] = ['type', 'value'];

  constructor(private service: PokemonService, private route: ActivatedRoute) {}

  ngOnInit() {
    return this.service.getPokemon(this.route.snapshot.params.id)
            .subscribe(data => {
              return this.card = data.cards.filter((card) => card.supertype === 'Pokémon')[0];
            })
  }

}
