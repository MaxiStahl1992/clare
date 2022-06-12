import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Game1flowerPageRoutingModule } from './game1flower-routing.module';

import { Game1flowerPage } from './game1flower.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Game1flowerPageRoutingModule
  ],
  declarations: [Game1flowerPage]
})
export class Game1flowerPageModule {}
