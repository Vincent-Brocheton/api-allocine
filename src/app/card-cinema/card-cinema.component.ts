import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-cinema',
  templateUrl: './card-cinema.component.html',
  styleUrls: ['./card-cinema.component.css']
})
export class CardCinemaComponent implements OnInit {

  @Input() cinema ;

  constructor() { }

  ngOnInit(): void {
  }

}
