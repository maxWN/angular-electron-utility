import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from 'electron';
import { FileReaderService } from '../../services/file-reader/file-reader.service';
import { Playlist } from '../../models/playlist';
import { MenuTypes } from '../../models/menuTypes';
import * as _ from 'lodash';

@Component({
  selector: 'desk-option-menu',
  templateUrl: './option-menu.component.html',
  styleUrls: ['./option-menu.component.css']
})
export class OptionMenuComponent implements OnInit {

  //region class variables 

    public isSearchDisplayed:boolean = false;
    public isSongSelectDisplayed:boolean = false;
    public isAnimationChangeDisplayed:boolean = false;
    public isFileEditDisplayed:boolean = false;
    public songTitle:string="Upload one or more files";
    // fileReaderSvc:FileReaderService;
    public SelectedTracks: Array<Playlist> = new Array<Playlist>();
    public currentTrack: Playlist;
    public filePath: any;
    public menuTitle:string;
    @Output() eventClick = new EventEmitter();
    @Input() menuType:number;
    public hasTrackBeenSelected: boolean = false;

  //endregion class variables

  constructor(private fileReaderSvc:FileReaderService) {
    // this.fileReaderSvc=fileReaderSvc;
   }

  //region public functions

    public ngOnInit():void {
      this.determineMenuSettings();
    }

    public determineMenuSettings():void {
      if(this.menuType==MenuTypes.Music) {
        this.menuTitle="My Music";
      }
      else if(this.menuType==MenuTypes.Video) {
        this.menuTitle="My Videos";
      }

    }

    //toggle option-menu options
    public displaySearch():void {
      this.isSearchDisplayed=!this.isSearchDisplayed;
    }

    public displayAnimationChange():void {
      this.isAnimationChangeDisplayed=!this.isAnimationChangeDisplayed;
    }

    public displaySongSelection():void {
      this.isSongSelectDisplayed=!this.isSongSelectDisplayed;
    }

    public displayFileEditing():void {
      this.isFileEditDisplayed=!this.isFileEditDisplayed;
    }

    /**
     * Gets file selection from HTML5 component
     * @public
     * @param $event {any} represents the event triggered from file selection
     **/
    public onHandleUpload($event): void {
      if($event) {
        this.songTitle=String($event.target.files[0].name);
        this.currentTrack = <Playlist>{};
        this.hasTrackBeenSelected = true;
        this.currentTrack.title = this.songTitle;
        this.readURL($event);
      }
    }

  //endregion public functions

  //region private functions

    //determine cause of error within 
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
     */
    private createRecentSongPlaylist(file):void {
      //append distinctive songs to array
      //make array act as a stack object
      //limit entries to maximum of 10
      let isTrackInPlaylist: boolean;

      if(this.currentTrack != null && this.currentTrack != undefined) {

        this.currentTrack.song = file;

        if(this.SelectedTracks.length == 0) {
          this.SelectedTracks.push(this.currentTrack);
        }
        else if(this.SelectedTracks.length < 10) {

          let foundTrack:Playlist = _.find(this.SelectedTracks, ['title', this.currentTrack.title]);
          //if track was found, do not add to playlist
          if(foundTrack == undefined) {
            this.SelectedTracks.push(this.currentTrack);
          }

        }
      }
    }

  //endregion private functions

}
