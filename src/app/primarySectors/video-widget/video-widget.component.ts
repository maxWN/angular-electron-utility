import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'desk-video-widget',
  templateUrl: './video-widget.component.html',
  styleUrls: ['./video-widget.component.css']
})
export class VideoWidgetComponent implements OnInit {

  //region local variables

  public isVideoPlayer:number=2;
  public hasFileLoaded:boolean=false;

  //endregion local variables

  constructor() { }

  public ngOnInit(): void {
  }

  //temporary UI testing function
  public enableVideo():void {
    this.hasFileLoaded = !this.hasFileLoaded;
  }

}
