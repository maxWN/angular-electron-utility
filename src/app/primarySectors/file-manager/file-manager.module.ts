import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FileManagerComponent } from './file-manager.component';
import { FileManagerRoutingModule } from './file-manager-routing.module';

@NgModule({
    declarations: [
      FileManagerComponent
    ],
    exports: [ FileManagerComponent ],
    imports: [ CommonModule, FileManagerRoutingModule ],
    providers: [],
    bootstrap: []
  })

  export class FileManagerModule { }
