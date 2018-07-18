import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppSettingsComponent } from './app-settings.component';
import { AppSettingsRoutingModule } from './app-settings-routing.module';

// REMEMBER: If you import a module that contains another module you are already importing,
// you can simply use the imported modules version, and remove your local import
@NgModule({
    declarations: [
      AppSettingsComponent
    ],
    exports: [ AppSettingsComponent ],
    imports: [ CommonModule, AppSettingsRoutingModule ],
    providers: [],
    bootstrap: []
  })

  export class AppSettingsModule { }
