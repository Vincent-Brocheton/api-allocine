import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeCinemaComponent } from './liste-cinema/liste-cinema.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PanierComponent } from './panier/panier.component';
import { ListFilmComponent } from './list-film/list-film.component';


const appRoutes: Routes = [
  { path: 'panier', component: PanierComponent },
  { path: 'film/:idCinema', component: ListFilmComponent },
  { path: 'cinema', component: ListeCinemaComponent },
  { path: '', redirectTo: '/cinema', pathMatch: 'full' },
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
