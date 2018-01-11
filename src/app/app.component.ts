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
  showDropdown:number=0.1;
  interval:any;

  constructor(private router: Router) {
  }

  timerWidget(): void {
    this.router.navigate(['/timer']);
  }

  homeLink():void {
    this.router.navigate(['/dashboard']);   
  }

  openDropdown():void {
    this.ifClicked=true;
    this.interval = setInterval(this.vaporize(), 1000);
  }

  //increase drop-down menu opacity
  vaporize():void {

    while(this.showDropdown < 1) {
      this.showDropdown++

      if(this.showDropdown == .9) {
         clearInterval(this.interval);
      }
    }    
  }

  soundWidget():void {
    this.router.navigate(['/sound-widget']);
  }  



}
