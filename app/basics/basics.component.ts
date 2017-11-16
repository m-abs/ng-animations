import { animate, AnimationMetadata, style, transition, trigger, useAnimation } from "@angular/animations";
import { Component } from "@angular/core";
import { resizeAnimation } from "../animations";

const pingTransition: AnimationMetadata[] = [
  // style({ transform: 'translateX(0)'}),
  animate("1s cubic-bezier(0.35, 0, 0.25, 1)", style({ transform: "translateX(200)"})),
];

const pongTransition: AnimationMetadata[] = [
  // style({ transform: 'translateX(200)'}),
  animate("1s cubic-bezier(0.35, 0, 0.25, 1)", style({ transform: "translateX(0)"})),
];

@Component({
  animations: [
    trigger("myAnimation", [
      transition("* => fadeIn", [
        // style({ opacity: 0 }),
        animate(500, style({ opacity: 1 })),
      ]),
      transition("* => fadeOut", [
        // style({ opacity: 1 }),
        animate("500ms", style({ opacity: 0 })),
      ]),
    ]),
    trigger("pingPongAnimation", [
      transition("ping => pong", pingTransition),
      transition("pong => ping", pongTransition),
    ]),
    trigger("sizeAnimation", [
      transition("* => XS",
        useAnimation(resizeAnimation, { params: { size: 0.5 }}),
      ),
      transition("* => S",
        useAnimation(resizeAnimation, { params: { size: 0.75 }}),
      ),
      transition("* => M",
        useAnimation(resizeAnimation, { params: { size: 1 }}),
      ),
      transition("* => L",
        useAnimation(resizeAnimation, { params: { size: 1.25 }}),
      ),
      transition("* => XL",
        useAnimation(resizeAnimation, { params: { size: 1.5 }}),
      ),
    ]),
  ],
  moduleId: module.id,
  selector: "app-basics",
  styleUrls: ["./basics.component.scss"],
  templateUrl: "./basics.component.html",
})
export class BasicsComponent {
  public fadeState = "";
  public pingPongState = "ping";
  public size = "M";

  public fadeIn() {
    this.fadeState = "fadeIn";
  }
  public fadeOut() {
    this.fadeState = "fadeOut";
  }
  public fadeToggle() {
    this.fadeState = (this.fadeState === "fadeIn") ? "fadeOut" : "fadeIn";
  }

  public ping() {
    this.pingPongState = "ping";
  }
  public pong() {
    this.pingPongState = "pong";
  }

}
