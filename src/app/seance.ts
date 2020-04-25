import {Cinema} from './cinema';
import {Film} from './film';

export interface Seance {
  id: number,
  cinema: Cinema,
  film: Film,
  debut: string,
  prix: any
}
