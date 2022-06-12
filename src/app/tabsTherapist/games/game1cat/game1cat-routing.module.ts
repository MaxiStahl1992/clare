import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Game1catPage } from './game1cat.page';

const routes: Routes = [
  {
    path: '',
    component: Game1catPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Game1catPageRoutingModule {}
