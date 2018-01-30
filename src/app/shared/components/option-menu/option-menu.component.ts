import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Event } from 'electron';
import { FileReaderService } from '../../services/file-reader/file-reader.service';

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
    public filePath: any;
    @Output() eventClick = new EventEmitter();

  //endregion class variables

  constructor(private fileReaderSvc:FileReaderService) {
    // this.fileReaderSvc=fileReaderSvc;
   }

  //region public functions

    public ngOnInit():void {
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

        this.eventClick.emit(input.target.files[0]);
      //   reader.readAsDataURL(input.target.files[0]);
      // }
    }

  //endregion private functions

}
