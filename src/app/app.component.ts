import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';
import { Route } from '@angular/router/src/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private router: Router) {
  }

  timerWidget(): void {
    this.router.navigate(['/timer']);
  }

  homeLink():void {
    this.router.navigate(['/dashboard']);   
  }

  soundWidget():void {
    this.router.navigate(['/sound-widget']);
  }





}
