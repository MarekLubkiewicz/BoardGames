import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TalismanPage } from './talisman.page';

const routes: Routes = [
  {
    path: '',
    component: TalismanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TalismanPageRoutingModule {}
