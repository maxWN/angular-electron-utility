import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'desk-text-editor-widget',
  templateUrl: './text-editor-widget.component.html',
  styleUrls: ['./text-editor-widget.component.css']
})
export class TextEditorWidgetComponent implements OnInit {

  public text:string;

  constructor() { }

  //region public functions

    public ngOnInit() {
      //load last saved file here, unless user has turned off setting
    }

    //for testing purposes only
    public getURL():void {
      alert("located at: "+window.location.href + "\n"+this.text);
    }

    //Remove text completely if unsaved, if saved, prompt user 
    public deleteText():void {
      this.text = '';
    }

  //endregion public functions


}
