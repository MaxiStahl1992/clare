import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: 'feedback.page.html',
  styleUrls: ['feedback.page.scss']
})
export class FeedbackPage{

  constructor(private route: Router) {}

  navigateToDoctorProfile(){
    this.route.navigate(['/tabsTherapist/doctorprofile']);
  }

}
