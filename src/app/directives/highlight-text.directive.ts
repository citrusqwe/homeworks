import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlightText]'
})
export class HighlightTextDirective {
  fontWeight = 'normal'

  @HostBinding("style.fontWeight") get getFontWeight() {
    return this.fontWeight;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.fontWeight = 'bold'
    this.highlight({color: 'pink', fontSize: '25px'});
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.fontWeight = 'normal'
    this.highlight();
  }

  constructor(private el: ElementRef) {
  }

  highlight(styles?: { [x: string]: string }) {
    if (!styles) this.el.nativeElement.style = ''
    Object.entries(styles || {})
      .forEach(([key, value]) => this.el.nativeElement.style[key] = value)
  }

}
