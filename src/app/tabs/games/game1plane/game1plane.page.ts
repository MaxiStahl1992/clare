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

  navigateToHome(){
    this.route.navigate(['/tabs/home']);
  }

  navigateToGame1Start(){
    this.route.navigate(['/tabs/game1start']);
  }

  navigateToGame1Flower(){
    this.route.navigate(['/tabs/game1flower']);
  }

}
