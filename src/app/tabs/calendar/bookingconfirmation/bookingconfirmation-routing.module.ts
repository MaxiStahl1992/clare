import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingconfirmationPage } from './bookingconfirmation.page';

const routes: Routes = [
  {
    path: '',
    component: BookingconfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingconfirmationPageRoutingModule {}
