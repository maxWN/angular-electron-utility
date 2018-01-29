import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'desk-interactive-map',
  templateUrl: './interactive-map.component.html',
  styleUrls: ['./interactive-map.component.css']
})
export class InteractiveMapComponent implements OnInit {

  //region class variables 
  
    public zoom: number;

  //endregion class variables 

  constructor() { }

  ngOnInit() {
    this.zoom = 1;
  }

}
