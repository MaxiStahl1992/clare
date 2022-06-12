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

  navigateToPatientMetrics(){
    this.route.navigate(['/tabsTherapist/game1start']);
  }

}
