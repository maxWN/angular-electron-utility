import { Component, OnInit } from '@angular/core';
// import {EditorModule} from 'primeng/primeng';

@Component({
  selector: 'desk-text-editor-widget',
  templateUrl: './text-editor-widget.component.html',
  styleUrls: ['./text-editor-widget.component.css']
})
export class TextEditorWidgetComponent implements OnInit {

  public text:string;

  constructor() { }

  ngOnInit() {

  }

  getURL():void {
    alert("located at: "+window.location.href + "\n"+this.text);
  }



}
