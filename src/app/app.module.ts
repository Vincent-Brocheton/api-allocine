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
import { HomeComponent } from './home/home.component';
import { SeancesComponent } from './seances/seances.component';
import { CardSeanceComponent } from './card-seance/card-seance.component';

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
    HomeComponent,
    SeancesComponent,
    CardSeanceComponent
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
