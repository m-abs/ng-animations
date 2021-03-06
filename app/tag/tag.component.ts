import { Component, OnInit } from '@angular/core';
import { trigger, transition, stagger, query, animate, style } from '@angular/animations';

@Component({
  moduleId: module.id,
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  animations: [
    trigger('layoutTag', [
      transition(':enter', [
        query('*', [
          style({ transform: 'translate(300)', opacity: 0 }),
          stagger(200, 
            animate('1.2s cubic-bezier(0.35, 0, 0.25, 1)', style('*'))
          )
        ])
      ]),
      transition(':leave', [
        animate('0.7s cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translateX(-400)' }))
      ])
    ])
  ]
})
export class TagComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  public message: Item[] = [
    new Item('Tag', 1),
    new Item('a', 2),
    new Item('friend', 3),
    new Item('to', 4),
    new Item('Animate', 5)
  ]
  
  private counter = 6;
  public addNewMessage() {
    this.message.push(
      new Item('Ready', this.counter++),
      new Item('to', this.counter++),
      new Item('leave', this.counter++)
    )
  }

  public removeSomething() {
    const index = Math.floor(Math.random() * this.message.length);

    this.message.splice(index, 1);
  }

}

class Item {
  constructor(public text: string, public index: number) {
  }
}
