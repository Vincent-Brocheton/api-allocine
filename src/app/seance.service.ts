import { Injectable } from '@angular/core';
import {Seance} from './seance';
import {seances} from './mock-seance-film-cinema';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {

  constructor() { }

  getAllSeanceByCinemaByFilm(idCinema, idFilm): Seance[] {

    let seancesFiltered = seances.filter(
      s =>
        s.cinema.id === idCinema
    );

    seancesFiltered = seancesFiltered.filter(
      s =>
        s.film.id === idFilm
    );

    seancesFiltered = seancesFiltered.filter(
      s =>
        moment().isBefore(s.debut)
    );

    //Trier par date/heure
    return seancesFiltered.sort((a,b) => moment(a.debut).isBefore(b.debut)? -1 : 1);
  }

  getNbreSeanceByFilmByCinema(idCinema, idFilm) {
    return this.getAllSeanceByCinemaByFilm(idCinema, idFilm).length;
  }
}
