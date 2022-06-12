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

  navigateToGameResults(){
    this.route.navigate(['/tabsTherapist/game1plane']);
  }

  navigateToPatientRecords(){
    this.route.navigate(['/tabsTherapist/game1cat']);
  }

  navigateToPatientData(){
    this.route.navigate(['/tabsTherapist/game1flower']);
  }

  navigateToPatients(){
    this.route.navigate(['/tabsTherapist/games']);
  }
}
