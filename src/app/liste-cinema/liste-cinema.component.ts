import { Component, OnInit } from '@angular/core';
import { cinemas } from '../cinemas';

@Component({
  selector: 'app-liste-cinema',
  templateUrl: './liste-cinema.component.html',
  styleUrls: ['./liste-cinema.component.css']
})
export class ListeCinemaComponent implements OnInit {

  cinemas = cinemas;

  constructor() { }

  ngOnInit(): void {
  }

}
