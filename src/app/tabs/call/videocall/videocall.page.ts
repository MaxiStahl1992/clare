import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-videocall',
  templateUrl: './videocall.page.html',
  styleUrls: ['./videocall.page.scss'],
})
export class VideocallPage implements OnInit {

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
