import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public title!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() { }

  ngOnInit() {
    // pobranie parametru 'title' z queryParams
    this.title = this.activatedRoute.snapshot.queryParamMap.get('title') as string;
  }
}
