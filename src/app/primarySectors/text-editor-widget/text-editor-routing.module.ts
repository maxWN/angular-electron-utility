import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextEditorWidgetComponent } from './text-editor-widget.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TextEditorWidgetComponent,
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class TextEditorWidgetRoutingModule { }
