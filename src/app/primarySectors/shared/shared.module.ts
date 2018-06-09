import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionMenuComponent, SoundAnimationComponent, ModalComponent } from './components/';

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
