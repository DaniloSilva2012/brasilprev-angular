import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';

const routes: Routes = [
  {
    path: 'pokemon/:id',
    component: PokemonPageComponent,
    data: { title: 'Pokedex - Detalhes' }
  },
  {
    path: '',
    component: PokemonsListComponent,
    data: { title: 'Pokedex - Homepage' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
