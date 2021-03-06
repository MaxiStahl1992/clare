import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GamesPage } from './games.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { GamesPageRoutingModule } from './games-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: GamesPage }]),
    GamesPageRoutingModule,
  ],
  declarations: [GamesPage]
})
export class GamesPageModule {}
