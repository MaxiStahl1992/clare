import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Game1starPage } from './game1star.page';

const routes: Routes = [
  {
    path: '',
    component: Game1starPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Game1starPageRoutingModule {}
