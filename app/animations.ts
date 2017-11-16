import { animate, animation, style } from "@angular/animations";

export const rotateAnimation = animation([
  style({ transform: "rotate({{ from }})"}),
  animate("{{ duration }}", style({ transform: "rotate({{ to }})"})),
], { params: {
  duration: "1s",
}});

export const resizeAnimation = animation([
  animate("{{ duration }}", style({ transform: "scale({{ size }})"})),
], { params: {
  duration: "1s",
}});
