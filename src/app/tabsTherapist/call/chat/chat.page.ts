import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  navigateToCall(){
    this.route.navigate(['/tabsTherapist/call']);
  }

  navigateToVideocall(){
    this.route.navigate(['/tabsTherapist/videocall']);
  }

  navigateToPhoneCall(){
    this.route.navigate(['/tabsTherapist/phonecall']);
  }

}
