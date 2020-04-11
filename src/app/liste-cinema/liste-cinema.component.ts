import { Component, OnInit } from '@angular/core';
import { Cinema } from '../cinema';
import { CinemaService } from '../cinema.service';

@Component({
  selector: 'app-liste-cinema',
  templateUrl: './liste-cinema.component.html',
  styleUrls: ['./liste-cinema.component.css']
})
export class ListeCinemaComponent implements OnInit {

  cinema : Cinema[];

  constructor(cinemaService : CinemaService) { 
    this.cinema = cinemaService.getAll();
  }

  ngOnInit() {
  }


}
