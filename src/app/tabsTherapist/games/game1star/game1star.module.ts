import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Game1starPageRoutingModule } from './game1star-routing.module';

import { Game1starPage } from './game1star.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Game1starPageRoutingModule
  ],
  declarations: [Game1starPage]
})
export class Game1starPageModule {}
