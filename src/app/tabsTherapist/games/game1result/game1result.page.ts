import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game1result',
  templateUrl: './game1result.page.html',
  styleUrls: ['./game1result.page.scss'],
})
export class Game1resultPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  navigateToHome(){
    this.route.navigate(['/tabs/home']);
  }

  navigateToGame1Cat(){
    this.route.navigate(['/tabs/game1cat']);
  }

  navigateToGame2Overview(){
    this.route.navigate(['/tabs/game2overview']);
  }

}
