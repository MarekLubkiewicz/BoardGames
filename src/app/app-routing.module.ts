import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start-page',
    pathMatch: 'full'
  },
  {
    path: 'your-events',
    loadChildren: () => import('./your-events/your-events.module').then( m => m.YourEventsPageModule)
  },
  {
    path: 'your-entries',
    loadChildren: () => import('./your-entries/your-entries.module').then( m => m.YourEntriesPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'game-compedium',
    loadChildren: () => import('./game-compedium/game-compedium.module').then( m => m.GameCompediumPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'start-page',
    loadChildren: () => import('./start-page/start-page.module').then( m => m.StartPagePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'game-one',
    loadChildren: () => import('./games/game-one/game-one.module').then( m => m.GameOnePageModule)
  },
  {
    path: 'talisman',
    loadChildren: () => import('./games/talisman/talisman.module').then( m => m.TalismanPageModule)
  },
  {
    path: 'tajniacy',
    loadChildren: () => import('./games/tajniacy/tajniacy.module').then( m => m.TajniacyPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
