import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractiveMapComponent } from './interactive-map.component';
import { AngularOpenlayersModule } from 'ngx-openlayers';
import { InteractiveMapRoutingModule } from './interactive-map-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
      InteractiveMapComponent
    ],
    exports: [ InteractiveMapComponent ],
    imports: [ CommonModule, AngularOpenlayersModule, FormsModule, InteractiveMapRoutingModule ],
    providers: [],
    bootstrap: []
  })
  export class InteractiveMapModule { }
