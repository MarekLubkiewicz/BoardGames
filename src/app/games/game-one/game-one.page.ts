import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-game-one',
  templateUrl: './game-one.page.html',
  styleUrls: ['./game-one.page.scss'],
})
export class GameOnePage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back(); // Cofnij do poprzedniej strony
  }

}
