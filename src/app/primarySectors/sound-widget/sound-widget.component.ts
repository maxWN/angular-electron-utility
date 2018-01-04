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

  public AudioFiles: Playlist = <Playlist>{};
  //song title model
  public totalTime:number;
  public isSongPlaying:boolean=false;
  public progressBar:string;
  public currentPos:number;

  constructor() {
    this.ngOnInit();
  }

  ngOnInit() {
    this.AudioFiles.song = new Howl({
      src:["assets/sounds/Maid with the Flaxen Hair.mp3"],
      volume:.25,
      onend:() => { alert("\"Maid with the Flaxen Hair\" has finished.") }
    });
    this.AudioFiles.title = "Maid with the Flaxen Hair";

    // this.AudioFiles.song.once("play", () => {
    //   while(this.AudioFiles.song.playing()) {
    //     // setTimeout(()=>{
    //     this.currentPos = this.AudioFiles.song.seek() || 0;
    //     console.log("current time"+Math.round(this.currentPos));
    //     this.progressBar = String((Math.round(this.currentPos)/this.totalTime)*100
    //     )+'%';
    //     console.log("results: "+this.progressBar);        
    //     // }, 1000);
    //   }
    // });

  }

  public playSong():void {
    this.AudioFiles.song.play();

    this.totalTime = this.AudioFiles.song.duration();
    this.isSongPlaying = true;    

    const interval = Observable.interval(100);
      
    interval
      .takeWhile(_ => this.AudioFiles.song.playing() )
      .do(()=>{this.timeRemaining()} )
      .subscribe();

  }

  public stopSong():void {
    if( this.AudioFiles.song.playing([0])) {
      this.AudioFiles.song.stop();
    }
  }

  public pauseSong():void {
    this.AudioFiles.song.pause();
  }

  public timeRemaining():void {

    this.currentPos = Math.round(this.AudioFiles.song.seek())
    this.progressBar = String(((this.currentPos)/this.totalTime)*100)+'%';

  }

}
