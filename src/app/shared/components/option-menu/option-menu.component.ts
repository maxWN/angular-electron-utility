import { Component, OnInit } from '@angular/core';
import { Event } from 'electron';


@Component({
  selector: 'desk-option-menu',
  templateUrl: './option-menu.component.html',
  styleUrls: ['./option-menu.component.css']
})
export class OptionMenuComponent implements OnInit {

  isSearchDisplayed:boolean=false;
  songTitle:string="Upload one or more files";

  constructor() { }

  //region public functions

  public ngOnInit():void {
  }

  public displaySearch():void {
    this.isSearchDisplayed=!this.isSearchDisplayed;
  }

  public onHandleUpload($event): void {
    if($event) {
      let x:File = $event.target.files[0];
      alert("name"+x.name);
    }
  }

  //endregion public functions

  //region private functions

  //determine cause of error within 
  private readURL(input):void {

    // if (input.files && input.files[0]) {
      let reader = new FileReader();
  
      reader.onloadend = function(e) {
        //insert service call
      }
      // this.songTitle=String(input.files[0]);
      reader.readAsDataURL(input.files[0]);
    // }
  }

  //endregion private functions

}
