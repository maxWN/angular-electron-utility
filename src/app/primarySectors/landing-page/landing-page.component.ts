import { Component, OnInit } from '@angular/core';
import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from '../../shared/keyframes';
import { ToolDescriptionsUS, ToolDescriptionsDE, ToolDescriptionsES } from '../../shared/models/toolDescriptions';

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
    public englishDescription: ToolDescriptionsUS;
    public isMusicAppInfo:boolean;
    public isMapAppInfo:boolean;
    public isFileManagerAppInfo:boolean;
    public isTextEditorAppInfo:boolean;
    public isVideoAppInfo:boolean;
  //endregion class variables

  constructor() { }

  //region public functions

  public ngOnInit():void {
    this.englishDescription = new ToolDescriptionsUS();
    this.isMusicAppInfo=true;
    this.toolDescription=this.englishDescription.MUSIC_PLAYER;
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

    switch(index) {
      case 1: 
        this.toolDescription=this.englishDescription.FILE_MANAGER;
        this.isMusicAppInfo=false;
        this.isMapAppInfo=false;
        this.isFileManagerAppInfo=true;
        this.isTextEditorAppInfo=false;
        this.isVideoAppInfo=false;
        break;
      case 2: 
        this.toolDescription=this.englishDescription.MUSIC_PLAYER;
        this.isMusicAppInfo=true;
        this.isMapAppInfo=false;
        this.isFileManagerAppInfo=false;
        this.isTextEditorAppInfo=false;
        this.isVideoAppInfo=false;
        break;
      case 3: 
        this.toolDescription=this.englishDescription.VIDEO_PLAYER;
        this.isMusicAppInfo=false;
        this.isMapAppInfo=false;
        this.isFileManagerAppInfo=false;
        this.isTextEditorAppInfo=false;
        this.isVideoAppInfo=true;
        break;
      case 4: 
        this.toolDescription=this.englishDescription.TEXT_EDITOR;
        this.isMusicAppInfo=false;
        this.isMapAppInfo=false;
        this.isFileManagerAppInfo=false;
        this.isTextEditorAppInfo=true;
        this.isVideoAppInfo=false;
        break;
      case 5: 
        this.toolDescription=this.englishDescription.INTERACTIVE_MAP;
        this.isMusicAppInfo=false;
        this.isMapAppInfo=true;
        this.isFileManagerAppInfo=false;
        this.isTextEditorAppInfo=false;
        this.isVideoAppInfo=false;
        break;
      default:
        //handle this type of error with ElectronService modal
        alert("Error occurred: no valid value entered.");      
    }

  }

  //endregion public functions

}
