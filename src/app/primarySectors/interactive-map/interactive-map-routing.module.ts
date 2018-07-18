import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InteractiveMapComponent } from './interactive-map.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: InteractiveMapComponent,
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class InteractiveMapRoutingModule { }
