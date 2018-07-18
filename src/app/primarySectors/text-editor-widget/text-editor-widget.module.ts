import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextEditorWidgetComponent } from './text-editor-widget.component';
import { TextEditorWidgetRoutingModule } from './text-editor-routing.module';
import { QuillModule } from 'ngx-quill'
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
      TextEditorWidgetComponent
    ],
    exports: [ TextEditorWidgetComponent ],
    imports: [ CommonModule, SharedModule, FormsModule, QuillModule, TextEditorWidgetRoutingModule ],
    providers: [],
    bootstrap: []
  })
  export class TextEditorWidgetModule { }
