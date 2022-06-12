import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: 'calendar.page.html',
  styleUrls: ['calendar.page.scss']
})
export class CalendarPage {

  constructor(private route: Router) {}

  navigateToDoctorProfile(){
    this.route.navigate(['/tabs/doctorprofile']);
  }

  navigateToAppointment(){
    this.route.navigate(['/tabs/appointment']);
  }

}
