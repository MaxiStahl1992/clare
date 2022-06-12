import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game2overview',
  templateUrl: './game2overview.page.html',
  styleUrls: ['./game2overview.page.scss'],
})
export class Game2overviewPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  navigateToHome(){
    this.route.navigate(['/tabs/home']);
  }

  navigateToGame1Result(){
    this.route.navigate(['/tabs/game1result']);
  }

  navigateToGame1Start(){
    this.route.navigate(['/tabs/game1start']);
  }

}
