import { Component, OnInit } from '@angular/core';
import { Seance } from '../seance';
import { Film } from '../film';
import { Cinema } from '../cinema';
import { ActivatedRoute } from '@angular/router';
import { CinemaService } from '../cinema.service';
import { FilmService } from '../film.service';
import { SeanceService } from '../seance.service';

@Component({
  selector: 'app-seances',
  templateUrl: './seances.component.html',
  styleUrls: ['./seances.component.css']
})
export class SeancesComponent implements OnInit {

  seances: Seance[];
  film: Film;
  cinema: Cinema;
  cinemas: Cinema[];

  constructor(
    private route: ActivatedRoute,
    private cinemaService: CinemaService,
    private filmService: FilmService,
    private seanceService: SeanceService
  ) {
  }

  ngOnInit() {
    const idCinema: number = +this.route.snapshot.paramMap.get('idCinema');
    const idFilm: number = +this.route.snapshot.paramMap.get('idFilm');
    this.cinema = this.cinemaService.get(idCinema);
    this.film = this.filmService.get(idFilm);
    this.seances = this.seanceService.getAllSeanceByCinemaByFilm(idCinema, idFilm);
    this.cinemas = this.cinemaService.getAll();
  }

}
