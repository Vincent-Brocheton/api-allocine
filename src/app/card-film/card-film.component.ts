import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-film',
  templateUrl: './card-film.component.html',
  styleUrls: ['./card-film.component.css']
})
export class CardFilmComponent implements OnInit {

  @Input() film;
  @Input() cinema;

  constructor() { }

  ngOnInit(): void {
  }

}
