import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../services/database.service';
import { Event } from '../models/events';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  public title!: string;
  events: { [key: string]: Event } = {}; // Słownik nazw wydarzeń i ich danych

  constructor(
    private activatedRoute: ActivatedRoute,
    private dbService: DatabaseService
  ) { }

  ngOnInit() {
    // pobranie parametru 'title' z queryParams
    this.title = this.activatedRoute.snapshot.queryParamMap.get('title') as string;
    this.dbService.getEvents((data) => {this.events = data as { [key: string]: Event}});
  }  
}
