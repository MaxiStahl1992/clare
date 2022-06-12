import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game1plane',
  templateUrl: './game1plane.page.html',
  styleUrls: ['./game1plane.page.scss'],
})
export class Game1planePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  navigateToGame1Start(){
    this.route.navigate(['/tabsTherapist/game1start']);
  }
}
