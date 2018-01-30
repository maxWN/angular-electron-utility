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

  //region class variables 
    public animationState:string;
    public APP_SUMMARY: string;
    public toolDescription: string;

    public isMusicAppInfo:boolean=true;
  //endregion class variables

  constructor() { }

  //region public functions

  public ngOnInit():void {
    this.toolDescription="The music player application allows you to "+
    "search files on your computer, play any time of file, edit the files,"+
    " play a background animation that syncs with the music, and have a personal "+
    "library of all of your favorite tunes.";
  }

  public startAnimation(state):void {
    // console.log(state);
    if(!this.animationState) {
      this.animationState=state;
    }
  }

  public resetAnimation():void  {
    this.animationState = '';
  }

  public explanationProvider(index:number):void {
    //function will take index provided by user 
    //create corresponding switch stmnt to determine which
    //explanation to provide
  }

  //endregion public functions

}
