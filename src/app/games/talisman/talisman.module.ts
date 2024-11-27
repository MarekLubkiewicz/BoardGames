import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TalismanPageRoutingModule } from './talisman-routing.module';

import { TalismanPage } from './talisman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TalismanPageRoutingModule
  ],
  declarations: [TalismanPage]
})
export class TalismanPageModule {}
