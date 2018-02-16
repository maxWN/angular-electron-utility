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

  ifClicked:boolean=false;
  showDropdown:number=0;
  opaqueProperty:string;
  interval:any;

  constructor(private router: Router) {
  }

  timerWidget(): void {
    this.router.navigate(['/timer']);
  }

  textEditorWidget(): void {
    this.router.navigate(['/text-editor-widget']);
  }

  homeLink():void {
    this.router.navigate(['/dashboard']);   
  }

  openDropdown():void {
    this.ifClicked=!this.ifClicked;
    this.interval = setInterval(this.vaporize(), 8000);
  }

  appSettingsLink():void {
    this.router.navigate(['/app-settings']);
  }

  mapLink():void {
    this.router.navigate(['/interactive-map']);
  }

  fileManagerLink():void {
    this.router.navigate(['/file-manager']);
  }

  //increase drop-down menu opacity
  vaporize():void {

    while(this.showDropdown < 1) {
      this.showDropdown=this.showDropdown+.1;
      this.opaqueProperty=String(this.showDropdown);
      if(this.showDropdown == .9) {
         clearInterval(this.interval);
      }
    }    
  }

  soundWidget():void {
    this.router.navigate(['/sound-widget']);
  }  

  videoWidget(): void {
    this.router.navigate(['/video-widget']);
  }


}
