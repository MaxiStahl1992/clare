import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Game1resultPage } from './game1result.page';

const routes: Routes = [
  {
    path: '',
    component: Game1resultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Game1resultPageRoutingModule {}
