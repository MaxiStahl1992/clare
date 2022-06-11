import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-feedback',
  templateUrl: 'feedback.page.html',
  styleUrls: ['feedback.page.scss']
})
export class FeedbackPage{

  constructor(private authService: AuthenticationService, private router: Router) {}

  async logout() {
    await this.authService.logout();
    await this.router.navigateByUrl('/', {replaceUrl: true});
  }
}
