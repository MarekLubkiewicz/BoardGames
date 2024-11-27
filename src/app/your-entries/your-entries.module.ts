import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourEntriesPageRoutingModule } from './your-entries-routing.module';

import { YourEntriesPage } from './your-entries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourEntriesPageRoutingModule
  ],
  declarations: [YourEntriesPage]
})
export class YourEntriesPageModule {}
