import { Injectable } from '@angular/core';

import { films } from './mock-films-cinemas';
import { Cinema } from './cinema';
import { Film } from './film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor() { }

  getAll(idCinema) : Film[] {
    return films.filter(function(film) {
      return film.cinemas.find(cinema => cinema.id === idCinema) !== undefined
    });
  }

  get(idCinema, idFilm) : Film {
    return null;
    //return cinemas.find(element => element.id === id);
  }

}
