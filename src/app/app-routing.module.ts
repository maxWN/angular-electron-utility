import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const appRoutes: Routes = [
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

const options: ExtraOptions = {
        enableTracing: true
}

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, options)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
