import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  moduleId: module.id,
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(
          ':enter',
          style({ transform: 'rotate(180)', opacity: 0 })
        ),

        query(
          ':enter', 
          stagger(
            250,
            animate('1s', style('*'))
          ),
          { delay: 10 }
        )
      ]),
    ])
  ]
})
export class ListComponent {

  
  public message: Item[] = [
    new Item('This', 1),
    new Item('is', 2),
    new Item('something', 3),
    new Item('special', 4),
    new Item('I', 5),
    new Item('❤️', 6),
    new Item('Angular', 7),
    new Item('Animations', 8)
  ]
  
  private counter = 9;
  public addNewMessage() {
    this.message.push(
      new Item('Entering', this.counter++),
      new Item('in', this.counter++),
      new Item('style', this.counter++)
    )
  }
}

class Item {
  constructor(public text: string, public index: number) {
  }
}