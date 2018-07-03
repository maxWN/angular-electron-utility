import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Howl } from 'howler';
import { Observable } from 'rxjs/Observable';
import { EventEmitter } from 'events';
import { ElectronService } from 'ngx-electron';
import { Playlist, ModalData } from '../shared/models/';


@Component({
  selector: 'desk-sound-widget',
  templateUrl: './sound-widget.component.html',
  styleUrls: ['./sound-widget.component.css']
})

export class SoundWidgetComponent implements OnInit {

  // region class variables

    public SelectedTracks: Array<Playlist> = new Array<Playlist>();
    public AudioFiles: Playlist = <Playlist>{};
    public footerMargin: string = "10rem";
    public songTitle: string;
    public totalTime: number;
    public isSongPlaying: boolean = false;
    public wasSongPaused: boolean = false;
    public isMusicPlayer: number = 1;
    public progressBar: string;
    public currentPos: number;
    public trackTime: string;
    public minutes: number;
    public index: number;
    public modalState: boolean = false;
    public musicPopupData: ModalData;
    // @Input() filePath:any;

  // endregion class variables

  constructor(private _electronService: ElectronService) {
  }

  // region public functions

  public ngOnInit():void {
  }

  public playSong():void {
    // TODO: Create a simple boolean variable that isn't dependent on
    // any of the Howl.js functions, and can only be set by the playSong()
    // function. This will replace the preventative condition below...
    this.AudioFiles.song.play();
    this.wasSongPaused = false;

    this.totalTime = Math.round( this.AudioFiles.song.duration() );
    this.isSongPlaying = true;

    const interval = Observable.interval(100);

    interval
      .takeWhile(_ => this.AudioFiles.song.playing() )
      .do(() => { this.timeRemaining() } )
      .subscribe();
    // this.openModal();
  }

  public stopSong(): void {
    if ( this.AudioFiles.song.playing([0])) {
      this.AudioFiles.song.stop();
      this.isSongPlaying = false;
      if(this.currentPos >= 0) {
        this.currentPos = 0;
      }
    }
    else {
      // if song was already playing, erase data
      if (parseInt(this.progressBar) > 0) {
        this.progressBar = "0%";
        this.trackTime = "0:00";
      }
    }
  }

  public pauseSong(): void {
    // if( this.AudioFiles.song.playing([0])) {
    this.AudioFiles.song.pause();
    // this is a temporary fix; new runtime errors occur
    this.wasSongPaused = true;
    this.isSongPlaying =! this.isSongPlaying;
    // }
  }

  public timeRemaining(): void {

    if (this.totalTime) {
      this.currentPos = Math.round(this.AudioFiles.song.seek());
      this.formatTime();
      this.progressBar = (((this.currentPos) / this.totalTime) * 100).toFixed(2) + '%';
      // this.progressBar = String(((this.currentPos)/this.totalTime)*100)+'%';
    }

  }

  // howler.js functions duration() and seek()
  // do not return rate of completion in total amount of seconds
  public formatTime(): void {

    if (this.currentPos < 60) {
      this.trackTime = '0:' + (this.currentPos < 10 ? '0' + this.currentPos : this.currentPos);
    } else {
      let min:number = (this.currentPos - this.currentPos % 60) / 60;
      let sec:number = this.currentPos % 60;
      this.trackTime = min + ':' + (sec < 10 ? '0' + sec : sec);
    }

  }

  /**
   * Handles click/onChange event sent from option-menu
   * @public
   * @param song {any} represents an audio file
   */
  public handleSongSelection(song): void {
    // if song is not undefined or null add song to playlist array
    alert("Our events type: "+song.type);
    if (song) {

      if (this.AudioFiles.song) {
        // if track is already playing, stop the track
        this.stopSong();
      }
      this.AudioFiles.song = new Howl({
        src:[song.path],
        volume: .25,
        onend:() => { this.onSongEnd() }
      });
      this.AudioFiles.title = song.name;
      // this.songTitle = this.AudioFiles.title;
      this.SelectedTracks.push(this.AudioFiles);

    } else {
      // if song is undefined throw exception/modal
      this._electronService.ipcRenderer.send('open-modal');
    }

  }

  /**
   * Handles end of a song; helps to prevent more than one song being played at once.
   * This occurs because after a Howl music file is finished playing it is 'destroyed',
   * and none of it's attributes can be accessed afterwards
   * @public
   */
  public onSongEnd(): void {
    this.isSongPlaying = false;
    // TODO need to use local string (songTitle) instead of AudioFiles.title,
    // as the can cause runtime errors due to object being destroyed before reaching
    // electronService modal call
    // this._electronService.ipcRenderer.send('open-modal', this.AudioFiles.title);
    this.openModal();
  }

  public openModal(): void {
    if (!this.modalState) {
      this.musicPopupData = <ModalData>{};
      this.musicPopupData.subTitle = "Choose next song";
      this.setPopupData();
      this.modalState = true;
    } else {
      this.modalState = false;
    }
  }

  public closeModal($event): void {
    if (this.modalState === false) {
      this.modalState = true;
      // this.setPopupData();
      // alert(this.modalState);
    } else {
      this.modalState = false;
      this.musicPopupData = null;
      // alert(this.modalState);
    }
  }

  public setPopupData(): void {
    this.musicPopupData = <ModalData>{};
    this.musicPopupData.subTitle = "Music Settings";
    this.musicPopupData.explanations = Array<string>();
    this.musicPopupData.explanations.push("Continue playing tracks from album/folder");
    this.musicPopupData.explanations.push("Select new track");
    this.musicPopupData.explanations.push("Restart track");
    this.musicPopupData.explanations.push("Close and don't show again");
  }

  // endregion public functions

}
