import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game1start',
  templateUrl: './game1start.page.html',
  styleUrls: ['./game1start.page.scss'],
})
export class Game1startPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  navigateToHome(){
    this.route.navigate(['/tabs/home']);
  }

  navigateToGames(){
    this.route.navigate(['/tabs/games']);
  }

  navigateToGame1Plane(){
    this.route.navigate(['/tabs/game1plane']);
  }
}
