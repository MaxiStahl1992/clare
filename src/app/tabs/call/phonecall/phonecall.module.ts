import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhonecallPageRoutingModule } from './phonecall-routing.module';

import { PhonecallPage } from './phonecall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhonecallPageRoutingModule
  ],
  declarations: [PhonecallPage]
})
export class PhonecallPageModule {}
