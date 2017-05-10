import { Directive, HostListener } from '@angular/core';
// import { screenfull } from 'screenfull';
const screenfull = require('screenfull');

@Directive({
  selector: '[appToggleFullscreen]'
})
export class ToggleFullscreenDirective {

  @HostListener('click') onClick() {
    if (screenfull.enabled) {
      screenfull.toggle();
    }
  }
}
