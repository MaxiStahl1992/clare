import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game1flower',
  templateUrl: './game1flower.page.html',
  styleUrls: ['./game1flower.page.scss'],
})
export class Game1flowerPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  navigateToPatientMetrics(){
    this.route.navigate(['/tabsTherapist/game1start']);
  }
}
