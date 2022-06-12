import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  navigateToBookingconfirmation(){
    this.route.navigate(['/tabs/bookingconfirmation']);
  }

}
