import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TajniacyPage } from './tajniacy.page';

const routes: Routes = [
  {
    path: '',
    component: TajniacyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TajniacyPageRoutingModule {}
