import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Game1flowerPage } from './game1flower.page';

const routes: Routes = [
  {
    path: '',
    component: Game1flowerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Game1flowerPageRoutingModule {}
