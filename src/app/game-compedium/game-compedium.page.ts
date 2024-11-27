import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  
}
