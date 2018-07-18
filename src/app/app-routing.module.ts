import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileManagerComponent } from './primarySectors/file-manager/file-manager.component';
import { SoundAnimationComponent } from './primarySectors/shared/components/sound-animation/sound-animation.component';
import { LandingPageComponent } from './primarySectors/landing-page/landing-page.component';
import { SoundWidgetComponent } from './primarySectors/sound-widget/sound-widget.component';
import { VideoWidgetComponent } from './primarySectors/video-widget/video-widget.component';
import { TextEditorWidgetComponent } from './primarySectors/text-editor-widget/text-editor-widget.component';
import { AppSettingsComponent } from './primarySectors/app-settings/app-settings.component';
import { InteractiveMapComponent } from './primarySectors/interactive-map/interactive-map.component';

//TODO: Add animation to routing
const appRoutes: Routes = [
    // { path: "", redirectTo: "/dashboard", pathMatch: "full" },
    // { path: "dashboard", component: LandingPageComponent },
    // // { path: "timer", component: TimerComponent },
    // { path: "sound-widget", component: SoundWidgetComponent },
    // { path: "text-editor-widget", component: TextEditorWidgetComponent },
    // { path: "app-settings", component: AppSettingsComponent },
    // { path: "interactive-map", component: InteractiveMapComponent },
    // { path: "video-widget", component: VideoWidgetComponent },
    // { path: "file-manager", component: FileManagerComponent }
  {
      path: 'dashboard', loadChildren: 'app/primarySectors/landing-page/landing-page.module#LandingPageModule'
  },
  {
      path: "", redirectTo: "/dashboard", pathMatch: "full"
  },
  {
      path: 'app-settings', loadChildren: 'app/primarySectors/app-settings/app-settings.module#AppSettingsModule'
  },
  {
      path: 'sound-widget', loadChildren: 'app/primarySectors/sound-widget/sound-widget.module#SoundWidgetModule'
  },
  {
      path: 'video-widget', loadChildren: 'app/primarySectors/video-widget/video-widget.module#VideoWidgetModule'
  },
  {
      path: 'file-manager', loadChildren: 'app/primarySectors/file-manager/file-manager.module#FileManagerModule'
  },
  {
      path: 'text-editor-widget', loadChildren: 'app/primarySectors/text-editor-widget/text-editor-widget.module#TextEditorWidgetModule'
  },
  {
      path: 'interactive-map', loadChildren: 'app/primarySectors/interactive-map/interactive-map.module#InteractiveMapModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
