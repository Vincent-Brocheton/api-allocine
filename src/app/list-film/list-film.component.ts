import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaService } from '../cinema.service';
import { FilmService } from '../film.service';
import { Cinema } from '../cinema';
import { Film } from '../film';


@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.css']
})
export class ListFilmComponent implements OnInit {

  cinema : Cinema;
  films : Film[];

  constructor(
    private route: ActivatedRoute,
    private cinemaService: CinemaService,
    private filmService: FilmService,
  ) { }

  ngOnInit() {
    let id : number = +this.route.snapshot.paramMap.get('idCinema');
    this.cinema = this.cinemaService.get(id);
    this.films = this.filmService.getAll(id);
  }

}
