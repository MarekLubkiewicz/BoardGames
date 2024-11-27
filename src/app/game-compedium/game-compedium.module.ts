import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameCompediumPageRoutingModule } from './game-compedium-routing.module';

import { GameCompediumPage } from './game-compedium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameCompediumPageRoutingModule
  ],
  declarations: [GameCompediumPage]
})
export class GameCompediumPageModule {}
