import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game1cat',
  templateUrl: './game1cat.page.html',
  styleUrls: ['./game1cat.page.scss'],
})
export class Game1catPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  navigateToPatientMetrics(){
    this.route.navigate(['/tabsTherapist/game1start']);
  }

}
