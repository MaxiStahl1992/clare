import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-call',
  templateUrl: './call.page.html',
  styleUrls: ['./call.page.scss'],
})
export class CallPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  navigateToChat(){
    this.route.navigate(['/tabs/chat']);
  }

}
