import {Seance} from './seance';

export const
  seances: Seance[] = [
    {
      id: 0,
      cinema:
      {
        id: 1,
        nom: 'Gaumont Valenciennes', 
        adresse: 'rue des Alpes 59300 Valenciennes',
        ville: 'Valenciennes',
        img: 'Gaumont-Valenciennes.jpg'
    },
      film:
        {
          id: 0,
          titre: 'D.A.R.Y.L.',
          image: 'daryl.jpg',
          duree: {hours: 1, minutes: 39},
          synopsis: 'Daryl, enfant adopte et heureux, est doué de facultes extraordinaires. Ses qualités surprenantes excitent la convoitise des militaires.',
          cinemas: [
            {
              id: 1,
              nom: 'Gaumont Valenciennes', 
              adresse: 'rue des Alpes 59300 Valenciennes',
              ville: 'Valenciennes',
              img: 'Gaumont-Valenciennes.jpg'
          } 
          ]

        },
      debut: '2020-04-23T15:20:00',
      prix: 10.50
    },
    {
      id: 1,
      cinema:
      {
        id: 2,
            nom: 'Cin\'Amand', 
            adresse: 'Rocade du Nord, 59230 Saint-Amand-les-Eaux',
            ville: 'Saint-Amand-Les-Eaux',
            img: 'cin-amand.jpg'
    },
      film:
        {
          id: 0 ,
          titre: 'D.A.R.Y.L.',
          image: 'daryl.jpg',
          duree: {hours: 1, minutes: 39},
          synopsis: 'Daryl, enfant adopte et heureux, est doué de facultes extraordinaires. Ses qualités surprenantes excitent la convoitise des militaires.',
          cinemas: [
          {
            id: 2,
            nom: 'Cin\'Amand', 
            adresse: 'Rocade du Nord, 59230 Saint-Amand-les-Eaux',
            ville: 'Saint-Amand-Les-Eaux',
            img: 'cin-amand.jpg'
        } 
      ]

    },
  debut: '2020-04-23T15:20:00',
  prix: 6.50
},
    {
      id: 2,
      cinema:
      {
        id: 2,
        nom: 'Cin\'Amand', 
        adresse: 'Rocade du Nord, 59230 Saint-Amand-les-Eaux',
        ville: 'Saint-Amand-Les-Eaux',
        img: 'cin-amand.jpg'
    }, 
      film:
        {
          id: 2,
          titre: 'La reine des neiges 2',
          image: 'frozen2.jpg',
          duree: {hours: 1, minutes: 44},
          synopsis: 'Pourquoi Elsa est-elle née avec des pouvoirs magiques ? La jeune fille rêve de l’apprendre, mais la réponse met son royaume en danger. Avec l’aide d’Anna, Kristoff, Olaf et Sven, Elsa entreprend un voyage aussi périlleux qu’extraordinaire. Dans La Reine des neiges, Elsa craignait que ses pouvoirs ne menacent le monde. Dans La Reine des neiges 2, elle espère qu’ils seront assez puissants pour le sauver…',
          cinemas: [
            {
              id: 2,
              nom: 'Cin\'Amand', 
              adresse: 'Rocade du Nord, 59230 Saint-Amand-les-Eaux',
              ville: 'Saint-Amand-Les-Eaux',
              img: 'cin-amand.jpg'
          }
          ]
        },
      debut: '2020-04-23T15:20:00',
      prix: 9.70
    },
    {
      id: 3,
      cinema:
      {
        id: 1,
        nom: 'Gaumont Valenciennes', 
        adresse: 'rue des Alpes 59300 Valenciennes',
        ville: 'Valenciennes',
        img: 'Gaumont-Valenciennes.jpg'
      },
      film:
      {
        id: 2,
        titre: 'USUAL SUSPECTS',
        duree: {hours: 1, minutes: 46},
        image: '69199504_af.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg',
        synopsis: 'Suite à une mystérieuse dénonciation, cinq criminels se retrouvent en garde à vue. Plus tard, engagés sur un coup par le génie du crime Keyser Söze, les cinq hommes sont pris au piège d’une diabolique machination… ',
        cinemas: [
          {
              id: 1,
              nom: 'Gaumont Valenciennes', 
              adresse: 'rue des Alpes 59300 Valenciennes',
              ville: 'Valenciennes',
              img: 'Gaumont-Valenciennes.jpg'
          }
        ]
      },
      debut: '2020-04-23T15:20:00',
      prix: 9.50
    }
  ]