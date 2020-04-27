import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  now;

  constructor() { }

  ngOnInit(): void {
    moment.locale('fr');
    this.now = moment().format('LL');
  }

}
