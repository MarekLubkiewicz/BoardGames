import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-your-events',
  templateUrl: './your-events.page.html',
  styleUrls: ['./your-events.page.scss'],
})
export class YourEventsPage implements OnInit {

  public title!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() { }

  ngOnInit() {
    // pobranie parametru 'title' z queryParams
    this.title = this.activatedRoute.snapshot.queryParamMap.get('title') as string;
  }

}
