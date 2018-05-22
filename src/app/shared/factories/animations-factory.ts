import {
    trigger,
    state,
    style,
    animate,
    transition,
    AnimationTriggerMetadata,
    keyframes
  } from '@angular/animations';

export function rowAnimation() : AnimationTriggerMetadata {
    return trigger('rowAnimation', [
        state('in', style({
            opacity: 1,
            transform: 'translateY(0)'
        })),
        transition('void => *',[
            animate(300,keyframes([
                style({
                    opacity:0,
                    transform: 'translateY(-30px)',
                    offset : 0
                }),
                style({
                    opacity:1,
                    transform: 'translateY(0px)',
                    offset : 0.5
                }),
                style({
                    opacity:1,
                    transform: 'translateY(-3px)',
                    offset : 0.75
                }),
                style({
                    opacity:1,
                    transform: 'translateY(0px)',
                    offset : 1
                })
            ]))
        ]),
        transition('* => void',[                
            animate(200, style({
                opacity:0,
                transform: 'translateX(30px)'
            }))
        ])
    ]);
}

export function fadeIn() : AnimationTriggerMetadata {
    return trigger('fadeIn', [
        state('in', style({
            opacity: 1
        })),
        transition('void => *',[
            style({ opacity:0, transform: 'translateY(-10px)' }), animate(300)
        ])
    ]);
}

export function fadeOutGrowing() : AnimationTriggerMetadata {
    return trigger('fadeOutGrowing', [
        state('in', style({
            opacity: 1
        })),
        transition('void => *',[
            style({ opacity:0, transform: 'translateY(-10px)' }), animate(300)
        ]),
        transition('* => void',[
            animate(300,keyframes([
                style({
                    opacity:1,
                    transform: 'scale(1)',
                    offset : 0
                }),
                style({
                    opacity: 0,
                    transform: 'scale(1.5)',
                    offset : 1
                })
            ]))
        ]),
    ]);
}

export function grow() : AnimationTriggerMetadata {
    return trigger('grow', [
        state('in', style({
            transform: 'scale(1)'
        })),
        transition('void => *',[
            style({ transform: 'scale(0)' }), animate(300)
        ])
    ]);
}

export function slideDownThenUp() : AnimationTriggerMetadata {
    return trigger('slideDownThenUp', [
        state('in', style({
            opacity: 1,
            height: '*'
        })),
        transition('void => *',[
            style({ opacity:0, height: '0px' }), animate(300)
        ]),
        transition('* => void',[
            animate(300,keyframes([
                style({
                    opacity:1,
                    height: '*',
                    offset : 0
                }),
                style({
                    opacity: 0,
                    height: '0px',
                    offset : 1
                })
            ]))
        ]),
    ]);
}