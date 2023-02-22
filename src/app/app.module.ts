import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { InlineSvgDirective } from './inline-svg.directive';
import { IsVisibleDirective } from './is-visible.directive';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    IsVisibleDirective,
    InlineSvgDirective,
    FooterComponent,
    LoginPageComponent,
    SignupPageComponent,
    HomeComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, FontAwesomeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
