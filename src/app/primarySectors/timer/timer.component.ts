import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'desk-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  title = 'app';
  
  
    max     = 1;
    current = 0;
    /// Start the timer
    start() {
      const interval = Observable.interval(100);
      
          interval
            .takeWhile(_ => !this.isFinished )
            .do(i => this.current += 0.1)
            .subscribe();
    }
     /// finish timer
    finish() {
      this.current = this.max;
    }
    /// reset timer
    reset() {
      this.current = 0;
    }
    /// Getters to prevent NaN errors
    get maxVal() {
      return isNaN(this.max) || this.max < 0.1 ? 0.1 : this.max;
    }
    get currentVal() {
      return isNaN(this.current) || this.current < 0 ? 0 : this.current;
    }
    get isFinished() {
      return this.currentVal >= this.maxVal;
    }

    constructor() { }
    
      ngOnInit() {
      }
    

}
