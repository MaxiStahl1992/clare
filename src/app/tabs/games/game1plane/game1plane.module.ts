import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Game1planePageRoutingModule } from './game1plane-routing.module';

import { Game1planePage } from './game1plane.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Game1planePageRoutingModule
  ],
  declarations: [Game1planePage]
})
export class Game1planePageModule {}
