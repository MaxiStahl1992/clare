import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: 'games.page.html',
  styleUrls: ['games.page.scss']
})
export class GamesPage {

  constructor(private route: Router) {}

  navigateToHome(){
    this.route.navigate(['/tabs/home']);
  }

  navigateToGame1Start(){
    this.route.navigate(['/tabs/game1start']);
  }

}
