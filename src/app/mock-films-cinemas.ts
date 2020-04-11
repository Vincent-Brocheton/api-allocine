// Liste des films avec les cinémas associés
import { Cinema } from './cinema';
import { Film } from './film';

export const films : Film[] = [
    {
        id: 1,
        titre: 'D.A.R.Y.L.',
        duree: {hours: 1, minutes: 39},
        image: '19145239.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg',
        cinemas: [
            {
                id: 1,
                nom: 'Gaumont Valenciennes', 
                adresse: 'rue des Alpes 59300 Valenciennes',
                img: 'Gaumont-Valenciennes.jpg'
            },
            {
                id: 2,
                nom: 'Cin\'Amand', 
                adresse: 'Rocade du Nord, 59230 Saint-Amand-les-Eaux',
                img: 'cin-amand.jpg'
            } 
        ]
    },
    {
        id: 2,
        titre: 'USUAL SUSPECTS',
        duree: {hours: 1, minutes: 46},
        image: '69199504_af.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg',
        cinemas: [
            {
                id: 1,
                nom: 'Gaumont Valenciennes', 
                adresse: 'rue des Alpes 59300 Valenciennes',
                img: 'Gaumont-Valenciennes.jpg'
            }
        ]
    },
    {
        id: 3,
        titre: 'LA REINE DES NEIGES II',
        duree: {hours: 1, minutes: 44},
        image: '5952325.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg',
        cinemas: [
            {
                id: 2,
                nom: 'Cin\'Amand', 
                adresse: 'Rocade du Nord, 59230 Saint-Amand-les-Eaux',
                img: 'cin-amand.jpg'
            } 
        ]
    }
]
