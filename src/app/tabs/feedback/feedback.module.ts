import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeedbackPage } from './feedback.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { FeedbackPageRoutingModule } from './feedback-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    FeedbackPageRoutingModule
  ],
  declarations: [FeedbackPage]
})
export class FeedbackPageModule {}
