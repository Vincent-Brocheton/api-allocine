import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  seances = [];

  constructor() { }

  ajouterPanier(seance) {
    this.seances.push(seance);
  }

  getPanier() {
    return this.seances;
  }
}
