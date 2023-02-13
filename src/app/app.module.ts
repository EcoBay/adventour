import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IsVisibleDirective } from './is-visible.directive';
import { SvgElementComponent } from './svg-element/svg-element.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    IsVisibleDirective,
    SvgElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
