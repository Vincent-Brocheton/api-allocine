import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { Time } from '@angular/common';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-card-seance',
  templateUrl: './card-seance.component.html',
  styleUrls: ['./card-seance.component.css']
})
export class CardSeanceComponent implements OnInit {

  @Input() film;
  @Input() cinema;
  @Input() seances;

  constructor(private panier: PanierService) { }

  ngOnInit() {
  }

  ajouterPanier(seance) {
   this.panier.ajouterPanier(seance);
  }

  dateSeance(date) {
    moment.locale('fr');
    return moment(date).format('LL');
  }

  heureDebutSeance(date) {
    moment.locale('fr');
    return moment(date).format('HH:mm');
  }

  calcHeureFin(date, length: Time) {
    const endHour = moment(date).add(length.hours, 'hours').add(length.minutes, 'minutes');
    return moment(endHour).format('HH:mm');
  }

}
