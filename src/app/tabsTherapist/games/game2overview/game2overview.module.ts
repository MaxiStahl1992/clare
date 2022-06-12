import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Game2overviewPageRoutingModule } from './game2overview-routing.module';

import { Game2overviewPage } from './game2overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Game2overviewPageRoutingModule
  ],
  declarations: [Game2overviewPage]
})
export class Game2overviewPageModule {}
