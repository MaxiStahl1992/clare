import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Game1resultPageRoutingModule } from './game1result-routing.module';

import { Game1resultPage } from './game1result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Game1resultPageRoutingModule
  ],
  declarations: [Game1resultPage]
})
export class Game1resultPageModule {}
