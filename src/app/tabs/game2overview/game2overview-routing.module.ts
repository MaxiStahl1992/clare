import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Game2overviewPage } from './game2overview.page';

const routes: Routes = [
  {
    path: '',
    component: Game2overviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Game2overviewPageRoutingModule {}
