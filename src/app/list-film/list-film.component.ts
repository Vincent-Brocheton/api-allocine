import { Component, OnInit } from '@angular/core';
import { cinemas } from '../cinemas';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.css']
})
export class ListFilmComponent implements OnInit {

  cinemas = cinemas;

  constructor() { }

  ngOnInit(): void {
  }

}
