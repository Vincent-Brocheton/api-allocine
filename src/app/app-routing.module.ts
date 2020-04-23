import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeCinemaComponent } from './liste-cinema/liste-cinema.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PanierComponent } from './panier/panier.component';
import { ListFilmComponent } from './list-film/list-film.component';
import { HomeComponent } from './home/home.component';
import { SeancesComponent } from './seances/seances.component'


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'seance/:idFilm/:idCinema', component: SeancesComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'film/:idCinema', component: ListFilmComponent },
  { path: 'cinemas', component: ListeCinemaComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
