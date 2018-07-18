import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoWidgetComponent } from './video-widget.component';
import { VideoWidgetRoutingModule } from './video-widget-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
      VideoWidgetComponent
    ],
    exports: [ VideoWidgetComponent ],
    imports: [ CommonModule, VideoWidgetRoutingModule, SharedModule ],
    providers: [],
    bootstrap: []
  })
  export class VideoWidgetModule { }
