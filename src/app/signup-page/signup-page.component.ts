import { Component, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import signupSVG from 'raw-loader!src/assets/images/sign-up.svg';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css'],
})
export class SignupPageComponent {
  signupSVG = signupSVG;
  name!: string;
  email!: string;
  password!: string;

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  signup(event: Event, form: NgForm) {
    event.preventDefault();
    if (form.invalid) return;
    this.authService.addUser(this.name, this.email, this.password);
    this.router.navigateByUrl('/');
  }
}
