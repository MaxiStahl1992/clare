import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Game1startPage } from './game1start.page';

const routes: Routes = [
  {
    path: '',
    component: Game1startPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Game1startPageRoutingModule {}
