import { Component } from '@angular/core';
import { trigger, transition } from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { fadeTransition, rotateTransition, slideLeftTransition } from './pageAnimations';


@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html',
  animations: [
    trigger('routeAnimation', [
      transition(':enter', []),
      // transition('* => *', fadeTransition),
      transition('BasicsPage => *', fadeTransition),
      transition('ListPage => *', rotateTransition),
      transition('TagPage => *', slideLeftTransition)
    ])
  ]
})
export class AppComponent {
  prepRouteState(routerOutlet: RouterOutlet): string {
    return routerOutlet.activatedRouteData['animation'] || 'firstPage';
  }
}













