import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourEntriesPage } from './your-entries.page';

const routes: Routes = [
  {
    path: '',
    component: YourEntriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourEntriesPageRoutingModule {}
