import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Game1catPageRoutingModule } from './game1cat-routing.module';

import { Game1catPage } from './game1cat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Game1catPageRoutingModule
  ],
  declarations: [Game1catPage]
})
export class Game1catPageModule {}
