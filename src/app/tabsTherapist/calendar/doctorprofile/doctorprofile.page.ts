import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-doctorprofile',
  templateUrl: './doctorprofile.page.html',
  styleUrls: ['./doctorprofile.page.scss'],
})
export class DoctorprofilePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  navigateToChat(){
    this.route.navigate(['/tabs/chat']);
  }

}
