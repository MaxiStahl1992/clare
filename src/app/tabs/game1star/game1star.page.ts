import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game1star',
  templateUrl: './game1star.page.html',
  styleUrls: ['./game1star.page.scss'],
})
export class Game1starPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  navigateToHome(){
    this.route.navigate(['/tabs/home']);
  }

  navigateToGame1Flower(){
    this.route.navigate(['/tabs/game1flower']);
  }

  navigateToGame1Cat(){
    this.route.navigate(['/tabs/game1cat']);
  }

}
