import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bookingconfirmation',
  templateUrl: './bookingconfirmation.page.html',
  styleUrls: ['./bookingconfirmation.page.scss'],
})
export class BookingconfirmationPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  navigateToAppointment(){
    this.route.navigate(['/tabs/appointment']);
  }

}
