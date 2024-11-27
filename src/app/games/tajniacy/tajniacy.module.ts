import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TajniacyPageRoutingModule } from './tajniacy-routing.module';

import { TajniacyPage } from './tajniacy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TajniacyPageRoutingModule
  ],
  declarations: [TajniacyPage]
})
export class TajniacyPageModule {}
