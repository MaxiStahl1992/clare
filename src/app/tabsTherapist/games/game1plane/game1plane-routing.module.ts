import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Game1planePage } from './game1plane.page';

const routes: Routes = [
  {
    path: '',
    component: Game1planePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Game1planePageRoutingModule {}
