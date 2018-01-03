import { Component, OnInit } from '@angular/core';
import { Howl } from 'howler';
import { Playlist } from '../../dataModels/playlist';

@Component({
  selector: 'desk-sound-widget',
  templateUrl: './sound-widget.component.html',
  styleUrls: ['./sound-widget.component.css']
})
export class SoundWidgetComponent implements OnInit {

  public AudioFiles: Playlist = <Playlist>{};
  //song title model
  public songTitle:string = "Track";
  public totalTime:string;
  public isSongPlaying:boolean=false;
  public progressBar:string;
  public currentPos:string;

  constructor() {
    this.ngOnInit();
  }

  ngOnInit() {
    this.AudioFiles.song = new Howl({
      src:["assets/sounds/Maid with the Flaxen Hair.mp3"],
      volume:.25,
      onend:() => { alert("\"Maid with the Flaxen Hair\" has finished.") }
    });
    this.AudioFiles.title = String(this.AudioFiles.song);
    alert("our song name: "+this.AudioFiles.title);
    this.songTitle=this.AudioFiles.title;
  }

  public playSong():void {
    this.AudioFiles.song.play();
    this.totalTime = this.AudioFiles.song.duration();
    this.isSongPlaying=true;    
    this.AudioFiles.song.once("play", () => {
      while(!this.AudioFiles.song.playing([0])) {
        this.currentPos=this.AudioFiles.song.seek();
        this.progressBar = String(Math.round( ((this.AudioFiles.song.src[0].seek() || 0)/Number(this.totalTime))*100
        ))+'%';
      }
    });
  }

  public stopSong():void {
    if( this.AudioFiles.song.playing([0])) {
      this.AudioFiles.song.stop();
    }
  }

  public pauseSong():void {
    this.AudioFiles.song.pause();
  }

}
