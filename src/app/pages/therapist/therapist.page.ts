import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';
import {Router} from '@angular/router';
import {Storage} from '@capacitor/storage';
import {INTRO_KEY} from '../../guards/intro.guard';

@Component({
  selector: 'app-therapist',
  templateUrl: './therapist.page.html',
  styleUrls: ['./therapist.page.scss'],
})
export class TherapistPage implements OnInit {
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
