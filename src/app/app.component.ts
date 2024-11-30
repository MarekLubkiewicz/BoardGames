import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public schedulerPages = [
    { title: 'Rozgrywki', url: '/events', icon: 'calendar' },
    { title: 'Planowanie', url: '/your-events', icon: 'push' },
    { title: 'Twoje zapisy', url: '/your-entries', icon: 'list' },
  ];  
  public logPages = [
    { title: 'Logowanie', url: '/login', icon: 'log-in' },
    { title: 'Rejestracja', url: '/registration', icon: 'create' },
  ];
  public gameCatalogPages = [
    { title: 'Katalog gier', url: '/game-compedium', icon: 'game-controller'},
   
  ];
  public infoPages = [
    { title: 'Ustawienia', url: '/settings', icon: 'settings'},
    { title: 'O aplikacji', url: '/about', icon: 'people'},
  ];

  constructor() {}
}
