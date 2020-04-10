import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeCinemaComponent } from './liste-cinema/liste-cinema.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PanierComponent } from './panier/panier.component';
import { ListFilmComponent } from './list-film/list-film.component';
import { CardCinemaComponent } from './card-cinema/card-cinema.component';
import { CardFilmComponent } from './card-film/card-film.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SeanceComponent } from './seance/seance.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeCinemaComponent,
    PageNotFoundComponent,
    PanierComponent,
    ListFilmComponent,
    CardCinemaComponent,
    CardFilmComponent,
    NavbarComponent,
    SeanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
