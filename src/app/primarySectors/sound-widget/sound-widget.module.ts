import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SoundWidgetComponent } from './sound-widget.component';
import { SoundWidgetRoutingModule } from './sound-widget-routing.module';
import { SharedModule } from '../shared/shared.module';

// REMEMBER: If you import a module that contains another module you are already importing,
// you can simply use the imported modules version, and remove your local import
@NgModule({
    declarations: [
      SoundWidgetComponent
    ],
    exports: [ SoundWidgetComponent ],
    imports: [ CommonModule, SoundWidgetRoutingModule, SharedModule ],
    providers: [],
    bootstrap: []
  })

  export class SoundWidgetModule { }
