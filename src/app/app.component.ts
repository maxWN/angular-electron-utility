import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';
import { Route } from '@angular/router/src/config';
// import { clearInterval } from 'timers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('popupState', [
      state('inactive', style({
        opacity: 1
      })),
      state('active',   style({
        opacity: 0
      })),
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('1000ms ease-out'))
    ])
  ]
})

export class AppComponent {

//region class variables 

  public ifClicked:boolean=false;
  public showDropdown:number=0;
  public opaqueProperty:string;
  public interval:any;
  public isModalDisplayed:boolean = false;
  public modalDisplay:string;

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

  public get stateName() {
    return this.isModalDisplayed ? 'inactive' : 'active';
    //this returns a STRING value, which will correspond with our animation states!
    //"openDropdown()"
  }

  public displayModal(): void {
    if(this.isModalDisplayed == false) {
      this.isModalDisplayed = true;
      this.modalDisplay = "inline-block";
    }
    else {
      this.isModalDisplayed = false;
      setTimeout(()=> {
        this.modalDisplay = "none";
      }, 1000)
    }
  }

  public soundWidget():void {
    this.router.navigate(['/sound-widget']);
  }  

  public videoWidget(): void {
    this.router.navigate(['/video-widget']);
  }

  public getCurrentSection(): boolean {
    // console.log(this.router.url); // routename
    if(this.router.url === '/sound-widget') {
      return true;
    } else {
      return false;
    }
  } 

//endregion public functions

}
