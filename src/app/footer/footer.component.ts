import { Component } from '@angular/core';
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  socials = [
    {
      name: 'facebook',
      icon: faFacebook,
      link: 'https://www.facebook.com/iamannearmy',
    },
    {
      name: 'instagram',
      icon: faInstagram,
      link: 'https://instagram.com/iamannearmy',
    },
    {
      name: 'twitter',
      icon: faTwitter,
      link: 'https://twitter.com/iamannearmy',
    },
  ];

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
