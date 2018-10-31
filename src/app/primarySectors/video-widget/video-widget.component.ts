import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Router } from '@angular/router';
// import { plyr } from 'plyr';

@Component({
  selector: 'desk-video-widget',
  templateUrl: './video-widget.component.html',
  styleUrls: ['./video-widget.component.css']
})
export class VideoWidgetComponent implements OnInit {

  // region local variables

  public isVideoPlayer: number = 2;
  public hasFileLoaded: boolean = false;
  public videoFile: string;
  public selections = 0;

  // endregion local variables

  constructor(private _electronService: ElectronService, private router: Router) { }

  public ngOnInit(): void {
  }

  //temporary UI testing function
  public enableVideo(): void {
    this.hasFileLoaded = !this.hasFileLoaded;
  }

   /**-------------------------------------------------
   * handleVideoSelection
   * -------------------------------------------------
   * @public Handles click/onChange event sent from option-menu
   * @param video {any} represents an video file
   */
  public handleVideoSelection(video): void {
    // if song is not undefined or null add song to playlist array

    if (this.selections == 0) {
      // uncomment for testing purposes
      // alert("Our events type: " + video);
      if (video) {

        this.videoFile = video;
        this.enableVideo();
        // original file reference: assets/test_vid.mp4
        // TODO: use secondary routing coupled with data resolvers to
        // pre-load the chosen file, which will then load the component...
        // https://stackoverflow.com/questions/39180415/angular-2-change-videos-src-after-clicking-on-div

      } else {
        // if song is undefined throw exception/modal
        this._electronService.ipcRenderer.send('open-modal');
      }
    } else {
      // store video AND selection value in a session cache and set the video on component reinitialization
      // this.videoFile = video;
      // sessionCache = this.videoFile
      this.router.navigateByUrl('/video-widget', {skipLocationChange: true}).then(()=>
      this.router.navigate(["/video-widget"]));      
    }

    this.selections++;
  }

}
