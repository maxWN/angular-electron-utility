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
  //song title model
  public songTitle:string = "Track";


  constructor() {
  }

  ngOnInit() {
    this.AudioFiles.song = new Howl({
      src:["assets/sounds/Maid with the Flaxen Hair.mp3"],
      volume:.25,
      onend:() => { alert("\"Maid with the Flaxen Hair\" has finished.") }
    });
  }

  public stopSong():void {
    this.AudioFiles.song.play();
  }

  public playSong():void {
    if( this.AudioFiles.song.duration > 0) {
      this.AudioFiles.song.stop();
    }

  }

}
