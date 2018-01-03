import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- here
import { RoundProgressModule } from 'angular-svg-round-progressbar'; // <-- here
// import { MatButtonModule, MatCheckboxModule, MatToolbar, MatMenu } from '@angular/material';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { TimerComponent } from './primarySectors/timer/timer.component';
import { LandingPageComponent } from './primarySectors/landing-page/landing-page.component';
import { SoundWidgetComponent } from './primarySectors/sound-widget/sound-widget.component';

const appRoutes: Routes = [
  { path: "", redirectTo: "/timer", pathMatch: "full" },
  { path: "dashboard", component: LandingPageComponent },
  { path: "timer", component: TimerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    LandingPageComponent,
    SoundWidgetComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),    
    FormsModule,
    RoundProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
