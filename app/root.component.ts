import { transition, trigger } from "@angular/animations";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { fadeTransition, rotateTransition, slideLeftTransition } from "./pageAnimations";

@Component({
  animations: [
    trigger("routeAnimation", [
      transition(":enter", []),
      // transition('* => *', fadeTransition),
      transition("BasicsPage => *", fadeTransition),
      transition("ListPage => *", rotateTransition),
      transition("TagPage => *", slideLeftTransition),
    ]),
  ],
  selector: "ns-root",
  templateUrl: "root.component.html",
})
export class RootComponent {
  public prepRouteState(routerOutlet: RouterOutlet): string {
    return routerOutlet.activatedRouteData.animation || "firstPage";
  }
}
