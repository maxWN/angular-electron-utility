import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from 'electron';
import { FileReaderService } from '../../services/file-reader/file-reader.service';
import { Playlist, MenuTypes } from '../../';
import * as _ from 'lodash';
import { $ } from 'protractor';

@Component({
  selector: 'desk-option-menu',
  templateUrl: './option-menu.component.html',
  styleUrls: ['./option-menu.component.css']
})
export class OptionMenuComponent implements OnInit {

  // region class variables

    public isSearchDisplayed: boolean = false;
    public isSongSelectDisplayed: boolean = false;
    public isAnimationChangeDisplayed: boolean = false;
    public isFileEditDisplayed: boolean = false;
    public isViewingOptionsDisplayed: boolean = false;
    public songTitle: string = "Upload one or more files";
    // fileReaderSvc:FileReaderService;
    public SelectedTracks: Array<Playlist> = new Array<Playlist>();
    public currentTrack: Playlist;
    public filePath: any;
    public menuTitle: string;
    @Output() eventClick = new EventEmitter();
    @Input() menuType: number;
    public hasTrackBeenSelected: boolean = false;

  // endregion class variables

  constructor(private fileReaderSvc:FileReaderService) {
    // this.fileReaderSvc=fileReaderSvc;
   }

  // region public functions

    public ngOnInit(): void {
      this.determineMenuSettings();
    }

    public determineMenuSettings(): void {
      if(this.menuType == MenuTypes.Music) {
        this.menuTitle = "My Music";
      } else if(this.menuType == MenuTypes.Video) {
        this.menuTitle = "My Videos";
      }

    }

    // toggle option-menu options
    public displaySearch(): void {
      this.isSearchDisplayed = !this.isSearchDisplayed;
      this.isAnimationChangeDisplayed = false;
      this.isSongSelectDisplayed = false;
      this.isFileEditDisplayed = false;
      this.isViewingOptionsDisplayed = false;
    }

    public displayAnimationChange(): void {
      this.isAnimationChangeDisplayed = !this.isAnimationChangeDisplayed;
      this.isSearchDisplayed = false;
      this.isSongSelectDisplayed = false;
      this.isFileEditDisplayed = false;      
    }

    public displaySongSelection(): void {
      this.isSongSelectDisplayed = !this.isSongSelectDisplayed;
      this.isAnimationChangeDisplayed = false;
      this.isSearchDisplayed = false;
      this.isFileEditDisplayed = false;      
    }

    public displayFileEditing(): void {
      this.isFileEditDisplayed = !this.isFileEditDisplayed;
      this.isAnimationChangeDisplayed = false;
      this.isSongSelectDisplayed = false;
      this.isSearchDisplayed = false;      
    }

    public displayViewingOptions(): void {
      this.isViewingOptionsDisplayed = !this.isViewingOptionsDisplayed;
      this.isSearchDisplayed = false;
    }

    /**
     * Gets file selection from HTML5 component
     * @public
     * @param $event {any} represents the event triggered from file selection
     **/
    public onHandleUpload($event): void {
      if ($event) {
        let fileName: string  = String($event.target.files[0].name);
        if (this.menuType == MenuTypes.Music) {

          if (this.isInvalidMusicFileUpload(fileName)) {
            this.songTitle = fileName;
            this.currentTrack = <Playlist>{};
            this.hasTrackBeenSelected = true;
            this.currentTrack.title = this.songTitle;
            this.readURL($event);
          } else {
            this.songTitle = "Error: User has selected an invalid file type!";
            // this.eventClick.emit()
          }

        } else if (this.menuType == MenuTypes.Video) {
          if (this.isInvalidVideoFileUpload(fileName)) {
            // TODO: Enhance video player to handle video files...
            // this.eventClick.emit()
          };
        }
      }
    }

    /**
     * Determines if music file uploaded is of proper type
     * @public
     * @param fileName {string} represents the name of a file
     **/
    public isInvalidMusicFileUpload(fileName: string): boolean {

      if (_.endsWith(fileName, '.mp3') || _.endsWith(fileName, '.aiff') ||
      _.endsWith(fileName, '.ogg') || _.endsWith(fileName, '.wma') ||
      _.endsWith(fileName, '.wav') || _.endsWith(fileName, '.flac')) {
        return true;
      }

      alert("Error: User has selected an invalid file type!");
      // launch popup; inform user that invalid file has been selected
      return false;
    }

     /**
     * Determines if video file uploaded is of proper type
     * @public
     * @param fileName {string} represents the name of a file
     **/
    public isInvalidVideoFileUpload(fileName: string): boolean {

      if (_.endsWith(fileName, '.mov') || _.endsWith(fileName, '.wmv') ||
      _.endsWith(fileName, '.flv') || _.endsWith(fileName, '.mp4') ||
      _.endsWith(fileName, '.avi')) {
        return true;
      }
      alert("Error: User has selected an invalid file type!");
      // launch popup; inform user that invalid file has been selected
      return false;
    }

  //endregion public functions

  // region private functions

    // determine cause of error within
    private readURL(input):void {

      // if (input.files && input.target.files[0]) {
        let reader = new FileReader();
        // this.fileReaderSvc.readFilePath(input);

        reader.onloadend = (e) => {
          //insert service call
          this.filePath = e.target;
        }
        this.createRecentSongPlaylist(input.target.files[0]);
        this.eventClick.emit(input.target.files[0]);
      //   reader.readAsDataURL(input.target.files[0]);
      // }
    }

    /**
     * Creates recently played song playlist for users to choose from
     * @private
     * @param file {var} - represents event triggered from file selection
     **/
    private createRecentSongPlaylist(file):void {
      // append distinctive songs to array
      // make array act as a stack object
      // limit entries to maximum of 10
      let isTrackInPlaylist: boolean;

      if (this.currentTrack != null && this.currentTrack != undefined) {

        this.currentTrack.song = file;

        if (this.SelectedTracks.length == 0) {
          // TODO: Whenever a database is created, use the
          // Object.assign({}, var, {cmd}) notation instead of the push function
          // this avoids using a risky mutable variable...
          this.SelectedTracks.push(this. currentTrack);
        } else if (this.SelectedTracks.length < 10) {

          let foundTrack:Playlist = _.find(this.SelectedTracks, ['title', this.currentTrack.title]);
          //if track was found, do not add to playlist
          if (foundTrack == undefined) {
            this.SelectedTracks.push(this.currentTrack);
          }

        }
      }
    }

  // endregion private functions

}
