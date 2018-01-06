import { Component, OnInit } from '@angular/core';
import { Howl } from 'howler';
import { Playlist } from '../../dataModels/playlist';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'desk-sound-widget',
  templateUrl: './sound-widget.component.html',
  styleUrls: ['./sound-widget.component.css']
})

export class SoundWidgetComponent implements OnInit {

  public SelectedTracks: Array<Playlist> = new Array<Playlist>();
  public AudioFiles: Playlist = <Playlist>{};
  //song title model
  public totalTime:number;
  public isSongPlaying:boolean=false;
  public progressBar:string;
  public currentPos:number;
  public trackTime:string;
  public minutes:number;

  constructor() {
    this.ngOnInit();
  }

  ngOnInit():void {

    this.AudioFiles.song = new Howl({
      src:["assets/sounds/Maid with the Flaxen Hair.mp3"],
      volume:.25,
      onend:() => { alert("\"Maid with the Flaxen Hair\" has finished.") }
    });
    this.AudioFiles.title = "Maid with the Flaxen Hair";

  }

  public playSong():void {

    this.AudioFiles.song.play();

    this.totalTime = Math.round( this.AudioFiles.song.duration() );
    this.isSongPlaying = true;    

    const interval = Observable.interval(100);
      
    interval
      .takeWhile(_ => this.AudioFiles.song.playing() )
      .do(() => { this.timeRemaining() } )
      .subscribe();

  }

  public stopSong():void {
    if( this.AudioFiles.song.playing([0])) {
      this.AudioFiles.song.stop();
      this.isSongPlaying = false;
      if(this.currentPos >= 0) {
        this.currentPos = 0;
      }
    }
  }

  public pauseSong():void {
    this.AudioFiles.song.pause();
  }

  public timeRemaining():void {

    // if(this.currentPos & this.totalTime) {
      this.currentPos = Math.round(this.AudioFiles.song.seek());
      this.FormatTime();
      this.progressBar = String(Math.round(((this.currentPos)/this.totalTime)*100))+'%';
    // }

  }

  // howler.js functions duration() and seek()
  // do not return rate of completion in  total amount of seconds
  public FormatTime():void {

    if(this.currentPos < 60) {
      this.trackTime = ""+this.currentPos;
    }
    else {
      let min:number = (this.currentPos-this.currentPos%60)/60;
      let sec:number = this.currentPos%60;
      this.trackTime = min+":"+sec;
    }

  }

}
