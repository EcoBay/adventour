import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appIsVisible]',
})
export class IsVisibleDirective {
  constructor(private element: ElementRef) {
    const observerOption = { threshold: 0.25 };
    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOption);
    intersectionObserver.observe(element.nativeElement);
  }
}
