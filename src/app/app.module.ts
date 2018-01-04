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
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: LandingPageComponent },
  { path: "timer", component: TimerComponent },
  { path: "sound-widget", component: SoundWidgetComponent }
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
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),    
    FormsModule,
    RoundProgressModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
