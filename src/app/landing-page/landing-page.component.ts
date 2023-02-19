import { Component } from '@angular/core';
import traveling from 'raw-loader!src/assets/images/traveling.svg';
import travelers from 'raw-loader!src/assets/images/travelers.svg';
import currentLocation from 'raw-loader!src/assets/images/current-location.svg';
import relaxation from 'raw-loader!src/assets/images/relaxation.svg';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  svg = {
    traveling,
    travelers,
    currentLocation,
    relaxation,
  };

  scrollTo(element: HTMLElement) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
