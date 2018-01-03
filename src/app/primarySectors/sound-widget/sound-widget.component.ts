import { Component, OnInit } from '@angular/core';
import { Howl } from 'howler';
import { Playlist } from '../../dataModels/playlist';

@Component({
  selector: 'desk-sound-widget',
  templateUrl: './sound-widget.component.html',
  styleUrls: ['./sound-widget.component.css']
})
export class SoundWidgetComponent implements OnInit {

  public AudioFiles: Playlist;

  constructor() { }

  ngOnInit() {
  }

}
