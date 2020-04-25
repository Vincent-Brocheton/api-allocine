import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Time } from '@angular/common';
import { PanierService } from '../panier.service';
import { Seance } from '../seance';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  seances: Seance[];
  TVA = 20 ;

  constructor(
    private panier: PanierService
  ) { }

  ngOnInit() {
    this.seances = this.panier.getPanier();
  }


  dateSeance(date) {
    moment.locale('fr');
    return moment(date).format('LL');
  }

  heureDebutSeance(date) {
    moment.locale('fr');
    return moment(date).format('HH:mm');
  }
}