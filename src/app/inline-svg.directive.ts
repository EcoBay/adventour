import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: 'svg [appInlineSvg]',
})
export class InlineSvgDirective implements OnInit {
  @Input() appInlineSvg!: string;

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = this.appInlineSvg;
    const svg = tempContainer.firstElementChild;
    if (svg === null) return;

    const element = this.element.nativeElement;
    Array.from(svg.attributes).forEach(function (attr) {
      element.setAttribute(attr.name, attr.value);
    });
    element.innerHTML = svg.innerHTML;
  }
}
