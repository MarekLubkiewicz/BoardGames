import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-your-entries',
  templateUrl: './your-entries.page.html',
  styleUrls: ['./your-entries.page.scss'],
})
export class YourEntriesPage implements OnInit {

  public title!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() { }

  ngOnInit() {
    // pobranie parametru 'title' z queryParams
    this.title = this.activatedRoute.snapshot.queryParamMap.get('title') as string;
  }

}
