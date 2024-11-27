import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameCompediumPage } from './game-compedium.page';

const routes: Routes = [
  {
    path: '',
    component: GameCompediumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameCompediumPageRoutingModule {}
