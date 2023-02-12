import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'controle-ismagi';
  film = {
    nomSalle: 'Horizon',
    nomCinema: 'DANS VOTRE CINÉMA',
    image: 'assets/alikhwane.png',
    nomFilm: 'Al ikhwane',
    enSalle: true,
    acteurs: [
      'Karima oulhous',
      'Talis',
      'Bassou mohamed',
      'Said Halim',
      'Rachid Rafik',
    ],
    details: {
      genre: 'comedie',
      public: 'tp',
      duree: '1h:45',
    },
  };
}
