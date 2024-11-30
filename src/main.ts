import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

const firebaseConfig = {
  apiKey: "AIzaSyCpM350As_gkIZ4WHo01j99fyrw5NKNC5E",
  authDomain: "boardgames-7af28.firebaseapp.com",
  databaseURL: "https://boardgames-7af28-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "boardgames-7af28",
  storageBucket: "boardgames-7af28.firebasestorage.app",
  messagingSenderId: "671186976720",
  appId: "1:671186976720:web:c8f34fe52fa08d938583d5",
  measurementId: "G-CJKZ4610T7"
  };
  
// Inicjalizacja Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
