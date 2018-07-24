import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { RoundProgressModule } from 'angular-svg-round-progressbar';
// import { MatButtonModule, MatCheckboxModule, MatToolbar, MatMenu } from '@angular/material';
import { AppComponent } from './app.component';
// import { RouterModule, Routes } from '@angular/router';
import { TimerComponent } from './primarySectors/timer/timer.component';
// import { LandingPageComponent } from './primarySectors/landing-page/landing-page.component';
// import { SoundWidgetComponent } from './primarySectors/sound-widget/sound-widget.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { VideoWidgetComponent } from './primarySectors/video-widget/video-widget.component';
// import { TextEditorWidgetComponent } from './primarySectors/text-editor-widget/text-editor-widget.component';
// import { QuillModule } from 'ngx-quill'
import { NgxElectronModule } from 'ngx-electron';
import { FooterComponent } from './primarySectors/footer/footer.component';
// import { AppSettingsComponent } from './primarySectors/app-settings/app-settings.component';
// import { InteractiveMapComponent } from './primarySectors/interactive-map/interactive-map.component';
// import { AngularOpenlayersModule } from 'ngx-openlayers';
// import { FileManagerComponent } from './primarySectors/file-manager/file-manager.component';
import { AppRoutingModule } from './app-routing.module';
// import { SharedModule } from './primarySectors/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    // LandingPageComponent,
    // SoundWidgetComponent,
    // VideoWidgetComponent,
    // TextEditorWidgetComponent,
    FooterComponent,
    // AppSettingsComponent,
    // InteractiveMapComponent,
    // FileManagerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // QuillModule,
    AppRoutingModule,
    FormsModule,
    // RoundProgressModule,
    NoopAnimationsModule,
    NgxElectronModule,
    // AngularOpenlayersModule,
    // SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
