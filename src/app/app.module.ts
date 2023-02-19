import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IsVisibleDirective } from './is-visible.directive';
import { InlineSvgDirective } from './inline-svg.directive';

@NgModule({
  declarations: [AppComponent, LandingPageComponent, IsVisibleDirective, InlineSvgDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
