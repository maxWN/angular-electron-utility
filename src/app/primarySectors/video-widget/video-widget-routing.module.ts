import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoWidgetComponent } from './video-widget.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: VideoWidgetComponent,
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class VideoWidgetRoutingModule { }
