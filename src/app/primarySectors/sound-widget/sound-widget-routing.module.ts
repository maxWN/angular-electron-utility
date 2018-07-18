import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SoundWidgetComponent } from './sound-widget.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SoundWidgetComponent,
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SoundWidgetRoutingModule { }
