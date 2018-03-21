import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'desk-video-widget',
  templateUrl: './video-widget.component.html',
  styleUrls: ['./video-widget.component.css']
})
export class VideoWidgetComponent implements OnInit {

  //region local variables

  public isVideoPlayer:number=2;

  //endregion local variables


  constructor() { }

  ngOnInit() {
  }

}
