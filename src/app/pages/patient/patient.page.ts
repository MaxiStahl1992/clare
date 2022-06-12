import {Component, OnInit, ViewChild} from '@angular/core';
import {Storage} from '@capacitor/storage';
import {INTRO_KEY} from '../../guards/intro.guard';
import {Router} from '@angular/router';
import {IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.page.html',
  styleUrls: ['./patient.page.scss'],
})
export class PatientPage implements OnInit {
  @ViewChild(IonSlides)slides: IonSlides;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  next(){
    this.slides.slideNext();
  }

  async start() {
    await Storage.set({key: INTRO_KEY, value: 'true'});
    await this.router.navigateByUrl('/login', { replaceUrl:true });
  }

}
