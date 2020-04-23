import { Time } from '@angular/common';
import { Cinema } from './cinema';

export interface Film {
    id: number;
    titre: string;
    duree: Time;
    image: string;
    synopsis: string;
    cinemas: Cinema[];
}