import { Component } from '@angular/core';
import { trigger, transition } from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { fadeTransition, rotateTransition, slideLeftTransition } from './pageAnimations';

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html',
})
export class AppComponent {
}
