import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'desk-option-menu',
  templateUrl: './option-menu.component.html',
  styleUrls: ['./option-menu.component.css']
})
export class OptionMenuComponent implements OnInit {

  isSearchDisplayed:boolean=false;

  constructor() { }

  public ngOnInit():void {
  }

  public displaySearch():void {
    this.isSearchDisplayed=!this.isSearchDisplayed;
  }

}
