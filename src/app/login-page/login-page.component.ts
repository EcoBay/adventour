import { Component } from '@angular/core';
import { Router } from '@angular/router';
import loginSVG from 'raw-loader!src/assets/images/login.svg';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  email!: string;
  password!: string;
  loginSVG = loginSVG;
  isValidLogin: boolean = true;

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  loginUser(event: Event) {
    event.preventDefault();
    this.isValidLogin = this.authService.login(this.email, this.password);
    if (!this.isValidLogin) this.password = '';
    else this.router.navigateByUrl('/');
  }
}
