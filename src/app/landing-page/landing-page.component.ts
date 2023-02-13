import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  scrollTo(element: HTMLElement) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
