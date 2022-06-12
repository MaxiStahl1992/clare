import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingconfirmationPageRoutingModule } from './bookingconfirmation-routing.module';

import { BookingconfirmationPage } from './bookingconfirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingconfirmationPageRoutingModule
  ],
  declarations: [BookingconfirmationPage]
})
export class BookingconfirmationPageModule {}
