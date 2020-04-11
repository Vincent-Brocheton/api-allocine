import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { cinemas } from './mock-cinema';
import { Cinema } from './cinema';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  constructor() { }

  getAll() : Cinema[] {
    return cinemas;
  }

  get(id) : Cinema {
    return cinemas.find(element => element.id === id);
  }
}
