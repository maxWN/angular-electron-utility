import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionMenuComponent, SoundAnimationComponent, ModalComponent } from './components/';
import { ModalSupportService } from './services/modal-support';

@NgModule({
    declarations: [
        OptionMenuComponent,
        SoundAnimationComponent,
        ModalComponent
    ],
    exports: [ OptionMenuComponent, SoundAnimationComponent, ModalComponent ],
    imports: [ CommonModule ],
    providers: [ ModalSupportService ],
    bootstrap: []
  })
  export class SharedModule { }
