import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionMenuComponent } from './components/option-menu/option-menu.component';
import { SoundAnimationComponent } from './components/sound-animation/sound-animation.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
    declarations: [
        OptionMenuComponent,
        SoundAnimationComponent,
        ModalComponent
    ],
    exports: [ OptionMenuComponent, SoundAnimationComponent, ModalComponent ],
    imports: [ CommonModule ],
    providers: [],
    bootstrap: []
  })
  export class SharedModule { }
