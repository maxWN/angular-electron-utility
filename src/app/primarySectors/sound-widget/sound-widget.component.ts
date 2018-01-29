import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Howl } from 'howler';
import { Observable } from 'rxjs/Observable';
import { EventEmitter } from 'events';
import { ElectronService } from 'ngx-electron';
import { Playlist } from '../../shared/models/playlist';


@Component({
  selector: 'desk-sound-widget',
  templateUrl: './sound-widget.component.html',
  styleUrls: ['./sound-widget.component.css']
})

export class SoundWidgetComponent implements OnInit {

  //region class variables 

    public SelectedTracks: Array<Playlist> = new Array<Playlist>();
    public AudioFiles: Playlist = <Playlist>{};
    //song title model
    public totalTime:number;
    public isSongPlaying:boolean=false;
    public progressBar:string;
    public currentPos:number;
    public trackTime:string;
    public minutes:number;
    // @Input() filePath:any;

  //endregion class variables

  constructor(private _electronService: ElectronService) {
  }

  //region public functions

  public ngOnInit():void {

    // this.AudioFiles.song = new Howl({
    //   src:["assets/sounds/Maid with the Flaxen Hair.mp3"],
    //   volume:.25,
    //   onend:() => { alert("\"Maid with the Flaxen Hair\" has finished.") }
    // });
    // this.AudioFiles.title = "Maid with the Flaxen Hair";

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
      this.formatTime();
      this.progressBar = (((this.currentPos)/this.totalTime)*100).toFixed(2)+'%';
      // this.progressBar = String(((this.currentPos)/this.totalTime)*100)+'%';
    // }

  }

  // howler.js functions duration() and seek()
  // do not return rate of completion in total amount of seconds
  public formatTime():void {

    if(this.currentPos < 60) {
      this.trackTime = "0:"+(this.currentPos < 10 ? "0"+this.currentPos : this.currentPos);
    }
    else {
      let min:number = (this.currentPos-this.currentPos%60)/60;
      let sec:number = this.currentPos%60;
      this.trackTime = min+":"+ (sec < 10 ? "0"+sec : sec);
    }

  }

  public handleSongSelection(song):void {
    // alert("Song selected: "+song.name); //alert("\""+song.name+"\"")

    /*
    ** if song is not undefined or null
    ** add song to playlist array
    ** if song is undefined throw exception/modal
    */
    if(song) {

      this.AudioFiles.song = new Howl({
        src:[song.path],
        volume:.25,
        onend:() => { this._electronService.ipcRenderer.send('open-modal', song.name); }
      });
      this.AudioFiles.title = song.name;
      // alert("file path... "+this.AudioFiles.song.src);

    }
    else {
      //throw exception/modal
      this._electronService.ipcRenderer.send('open-modal');
    }

  }

  //endregion public functions

}
