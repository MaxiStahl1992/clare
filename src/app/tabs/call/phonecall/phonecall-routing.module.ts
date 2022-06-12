import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhonecallPage } from './phonecall.page';

const routes: Routes = [
  {
    path: '',
    component: PhonecallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhonecallPageRoutingModule {}
