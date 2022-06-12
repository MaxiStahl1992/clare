import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-phonecall',
  templateUrl: './phonecall.page.html',
  styleUrls: ['./phonecall.page.scss'],
})
export class PhonecallPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  navigateToChat(){
    this.route.navigate(['/tabs/chat']);
  }

  navigateToCall(){
    this.route.navigate(['/tabs/call']);
  }

}
