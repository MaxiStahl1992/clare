import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Game1startPageRoutingModule } from './game1start-routing.module';

import { Game1startPage } from './game1start.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Game1startPageRoutingModule
  ],
  declarations: [Game1startPage]
})
export class Game1startPageModule {}
