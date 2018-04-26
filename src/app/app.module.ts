import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- here
// import { RoundProgressModule } from 'angular-svg-round-progressbar'; // <-- here
// import { MatButtonModule, MatCheckboxModule, MatToolbar, MatMenu } from '@angular/material';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { TimerComponent } from './primarySectors/timer/timer.component';
import { LandingPageComponent } from './primarySectors/landing-page/landing-page.component';
import { SoundWidgetComponent } from './primarySectors/sound-widget/sound-widget.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SoundAnimationComponent } from './primarySectors/shared/components/sound-animation/sound-animation.component';
import { OptionMenuComponent } from './primarySectors/shared/components/option-menu/option-menu.component';
import { VideoWidgetComponent } from './primarySectors/video-widget/video-widget.component';
import { TextEditorWidgetComponent } from './primarySectors/text-editor-widget/text-editor-widget.component';
import { QuillModule } from 'ngx-quill'
import { NgxElectronModule } from 'ngx-electron';
import { FooterComponent } from './primarySectors/footer/footer.component';
import { FileReaderService } from './primarySectors/shared/services/file-reader/file-reader.service';
import { AppSettingsComponent } from './primarySectors/app-settings/app-settings.component';
import { InteractiveMapComponent } from './primarySectors/interactive-map/interactive-map.component';
import { AngularOpenlayersModule } from 'ngx-openlayers';
import { FileManagerComponent } from './primarySectors/file-manager/file-manager.component';

const appRoutes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: LandingPageComponent },
  { path: "timer", component: TimerComponent },
  { path: "sound-widget", component: SoundWidgetComponent },
  { path: "text-editor-widget", component: TextEditorWidgetComponent },
  { path: "app-settings", component: AppSettingsComponent },
  { path: "interactive-map", component: InteractiveMapComponent },
  { path: "video-widget", component: VideoWidgetComponent},
  { path: "file-manager", component: FileManagerComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    LandingPageComponent,
    SoundWidgetComponent,
    SoundAnimationComponent,
    OptionMenuComponent,
    VideoWidgetComponent,
    TextEditorWidgetComponent,
    FooterComponent,
    AppSettingsComponent,
    InteractiveMapComponent,
    FileManagerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    QuillModule,
    RouterModule.forRoot(appRoutes),    
    FormsModule,
    // RoundProgressModule,
    NoopAnimationsModule,
    NgxElectronModule,
    AngularOpenlayersModule

  ],
  providers: [FileReaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
