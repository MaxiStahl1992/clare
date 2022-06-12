import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage implements OnInit {
  notesActive = false;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  toggleNotes(){
    this.notesActive = !this.notesActive;
  }

  navigateToProfile(){
    this.route.navigate(['/tabsTherapist/doctorprofile']);
  }

}
