import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tajniacy',
  templateUrl: './tajniacy.page.html',
  styleUrls: ['./tajniacy.page.scss'],
})
export class TajniacyPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back(); // Cofnij do poprzedniej strony
  }

}
