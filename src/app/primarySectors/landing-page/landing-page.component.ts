import { Component, OnInit } from '@angular/core';
import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from '../../shared/keyframes';

@Component({
  selector: 'desk-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swing', animate(1000, keyframes(kf.swing)))
    ])
  ]
})
export class LandingPageComponent implements OnInit {

  public animationState:string;
  public APP_SUMMARY: string;

  constructor() { }

  ngOnInit() {
  }

  startAnimation(state) {
    // console.log(state);
    if(!this.animationState) {
      this.animationState=state;
    }
  }

  resetAnimation() {
    this.animationState = '';
  }

}
