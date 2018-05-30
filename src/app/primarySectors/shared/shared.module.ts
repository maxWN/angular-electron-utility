import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionMenuComponent } from './components/option-menu/option-menu.component';
import { SoundAnimationComponent } from './components/sound-animation/sound-animation.component';

@NgModule({
    declarations: [
        OptionMenuComponent,
        SoundAnimationComponent
    ],
    exports: [ OptionMenuComponent, SoundAnimationComponent ],
    imports: [ CommonModule ],
    providers: [],
    bootstrap: []
  })
  export class SharedModule { }
