import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'desk-text-editor-widget',
  templateUrl: './text-editor-widget.component.html',
  styleUrls: ['./text-editor-widget.component.css']
})
export class TextEditorWidgetComponent implements OnInit {

  public text: string;

  constructor() { }

  // region public functions

    public ngOnInit(): void {
      // load last saved file here, unless user has turned off setting
    }

    // for testing purposes only
    public getURL(): void {
      alert("located at: " + window.location.href + "\n" + this.text);
    }

    // Remove text completely if unsaved, if saved, prompt user 
    public deleteText(): void {
      this.text = '';
    }

    // Use the following example:
    // https://stackoverflow.com/questions/40782331/use-filesaver-js-with-angular2
    // Save text file 
    public saveFile(): void {
      if (this.text && this.text.length > 0) {
        // this.text.replace(/<(?:.|\n)*?>/gm, '');
        this.text = this.createPlainText(this.text);
        let blob = new Blob([this.text], { type: "text/plain;charset=utf-8" });
        // let x_filename = data.headers.get('x-filename');
        saveAs(blob);
      }
    }

    public createPlainText(html): string {
      let doc = new DOMParser().parseFromString(html, 'text/html');
      return doc.body.textContent || "";
   }

  // endregion public functions


}
