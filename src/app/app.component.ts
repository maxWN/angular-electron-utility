import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';
import { Route } from '@angular/router/src/config';
// import { clearInterval } from 'timers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

//region class variables 

  ifClicked:boolean=false;
  showDropdown:number=0;
  opaqueProperty:string;
  interval:any;

//endregion class variables

  constructor(private router: Router) {
  }

//region public functions 

  public timerWidget(): void {
    this.router.navigate(['/timer']);
  }

  public textEditorWidget(): void {
    this.router.navigate(['/text-editor-widget']);
  }

  public homeLink():void {
    this.router.navigate(['/dashboard']);   
  }

  public openDropdown():void {
    this.ifClicked=!this.ifClicked;
    this.interval = setInterval(this.vaporize(), 8000);
  }

  public appSettingsLink():void {
    this.router.navigate(['/app-settings']);
  }

  public mapLink():void {
    this.router.navigate(['/interactive-map']);
  }

  public fileManagerLink():void {
    this.router.navigate(['/file-manager']);
  }

  //TODO: Replace TypeScript function with SCSS animation instead
  public vaporize():void {

    while(this.showDropdown < 1) {
      this.showDropdown=this.showDropdown+.1;
      this.opaqueProperty=String(this.showDropdown);
      if(this.showDropdown == .9) {
         clearInterval(this.interval);
      }
    }    
  }

  public soundWidget():void {
    this.router.navigate(['/sound-widget']);
  }  

  public videoWidget(): void {
    this.router.navigate(['/video-widget']);
  }

//endregion public functions

}
