import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';

@NgModule({
    declarations: [
      LandingPageComponent
    ],
    exports: [ LandingPageComponent ],
    imports: [ CommonModule, LandingPageRoutingModule ],
    providers: [],
    bootstrap: []
  })
  export class LandingPageModule { }
