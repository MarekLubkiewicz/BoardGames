import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../models/game';

@Component({
  selector: 'app-game-compedium',
  templateUrl: './game-compedium.page.html',
  styleUrls: ['./game-compedium.page.scss'],
})
export class GameCompediumPage implements OnInit {

  public title!: string;
  
  private activatedRoute = inject(ActivatedRoute);
  private router  = inject(Router);
  constructor() { }

  ngOnInit() {
    // pobranie parametru 'title' z queryParams
    this.title = this.activatedRoute.snapshot.queryParamMap.get('title') as string;
  }

  onImageClick(targetPage: string) {
    this.router.navigate([targetPage]);
  }

  games: Game[] = [
    {
      id: 1,
      title: 'Talisman: Magia i miecz',
      routing:'/talisman',
      image: 'assets/images/talizmanSmall.png',
      shortInfo: 'W grze wyruszysz na epicką przygodę, ścigając się, aby jako pierwszy zdobyć Talizman, dotrzeć do Korony Władzy w centrum planszy i pokonać starszego smoka, aby wygrać.',
    },
    {
      id: 2,
      title: 'Tajniacy',
      routing: '/tajniacy',
      image: 'assets/images/tajniacySmall.png',
      shortInfo: 'Dwie drużyny, którym przewodzi dwóch Szefów Wywiadu, próbują jak najszybciej nawiązać kontakt ze wszystkimi swoimi agentami',
    },
  ];
  
}
