import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { PracticeComponent } from './practice/practice.component';
import { PoketypComponent } from './poketyp/poketyp.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokeballsComponent } from './products/pokeballs/pokeballs.component';
import { StonesComponent } from './products/stones/stones.component';
import { PortionsComponent } from './products/portions/portions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductsComponent,
    PracticeComponent,
    PoketypComponent,
    PokemonsComponent,
    PokeballsComponent,
    StonesComponent,
    PortionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
