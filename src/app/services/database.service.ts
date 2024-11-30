import { Injectable } from '@angular/core';
import { getDatabase, ref, onValue } from 'firebase/database';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private db = getDatabase();

  // Metoda do pobierania danych wydarzeń
  getEvents(callback: (events: any) => void) {
    const eventsRef = ref(this.db, 'Events');

    // Pobieranie danych z Firebase
    onValue(eventsRef, (snapshot) => {
      const data = snapshot.val();
      callback(data);
    });
  }
}