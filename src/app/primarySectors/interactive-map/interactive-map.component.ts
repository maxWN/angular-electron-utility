import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'desk-interactive-map',
  templateUrl: './interactive-map.component.html',
  styleUrls: ['./interactive-map.component.css']
})
export class InteractiveMapComponent implements OnInit {

  //region class variables 
  
    public zoom: number;
    public longitude:number;
    public latitude:number;

  //endregion class variables 

  constructor() { }

  ngOnInit() {
    //default values
    this.zoom = 1;
    this.latitude=138.210225;
    this.longitude= 15.795122;
  }

}
