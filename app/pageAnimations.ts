import { query, style, group, animate, animateChild } from "@angular/animations";

export const fadeTransition = [
  query(':leave', style({ opacity: 1})),
  query(':enter', style({ opacity: 0})),

  group([
    query(':leave', [
      animate('0.5s', style({ opacity: 0 })),
      style({ display: 'none' })
    ]),

    query(':enter', animate('0.5s', style({ opacity: 1 })))
  ], { delay: 10 })
];

export const slideLeftTransition = [
  query(':leave', style({ transform: 'translate(0)' })),
  query(':enter', style({ transform: 'translate(-500)' })),

  group([
    query(':leave', [
      animate('0.5s', style({ transform: 'translate(500)' })),
      style({ display: 'none' }),
    ]),
    query(':enter', animate('0.5s', style({ transform: 'translate(0)' })))
  ], { delay: 10 })
];

export const rotateTransition = [
  query(':enter', style({ transform: 'rotateX(720deg)', opacity: 0 })),
  query(':leave', style({ transform: 'rotate(0)', opacity: 1 })),

  group([
    query(':enter', animate('1500ms', style({ transform: 'rotateX(0)', opacity: 1 }))),
    query(':leave', [
      animate('1500ms', style({ transform: 'rotate(720deg)', opacity: 0 })),
      style({ display: 'none' })
    ]),
  ], { delay: 10 })
]
