import { animate, query, stagger, style, transition, trigger } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
  animations: [
    trigger("listAnimation", [
      transition("* => *", [
        query(
          ":enter",
          style({ transform: "rotate(180)", opacity: 0 }),
        ),

        query(
          ":enter",
          stagger(
            250,
            animate("1s", style("*")),
          ),
          { delay: 10 },
        ),
      ]),
    ]),
  ],
  moduleId: module.id,
  selector: "app-list",
  styleUrls: ["./list.component.scss"],
  templateUrl: "./list.component.html",
})
export class ListComponent {
  public message: Item[] = [
    new Item("This", 1),
    new Item("is", 2),
    new Item("something", 3),
    new Item("special", 4),
    new Item("I", 5),
    new Item("❤️", 6),
    new Item("Angular", 7),
    new Item("Animations", 8),
  ];

  private counter = 9;
  public addNewMessage() {
    this.message.push(
      new Item("Entering", this.counter++),
      new Item("in", this.counter++),
      new Item("style", this.counter++),
    );
  }
}

class Item {
  constructor(public text: string, public index: number) {
  }
}
