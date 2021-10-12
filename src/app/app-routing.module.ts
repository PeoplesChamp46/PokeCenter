import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './pokemons/detail/detail.component';
import { PokelistComponent } from './pokemons/pokelist/pokelist.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PoketypComponent } from './poketyp/poketyp.component';
import { PokeballsComponent } from './products/pokeballs/pokeballs.component';
import { PortionsComponent } from './products/portions/portions.component';
import { ProductsComponent } from './products/products.component';
import { StonesComponent } from './products/stones/stones.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'pokemon',
    component: PokemonsComponent,
    children: [
      { path: '', component: PokelistComponent },
      { path: 'detail', component: DetailComponent },
    ],
  },
  { path: 'poketyp', component: PoketypComponent },
  {
    path: 'product',
    component: ProductsComponent,
    children: [
      { path: '', component: PokeballsComponent },
      { path: 'portion', component: PortionsComponent },
      { path: 'stone', component: StonesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
