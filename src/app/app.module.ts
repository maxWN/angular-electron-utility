import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { MatButtonModule, MatCheckboxModule, MatToolbar, MatMenu } from '@angular/material';
import { AppComponent } from './app.component';
// import { RouterModule, Routes } from '@angular/router';
import { TimerComponent } from './primarySectors/timer/timer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { QuillModule } from 'ngx-quill'
import { NgxElectronModule } from 'ngx-electron';
import { FooterComponent } from './primarySectors/footer/footer.component';
// import { AngularOpenlayersModule } from 'ngx-openlayers';
import { AppRoutingModule } from './app-routing.module';
// import { SharedModule } from './primarySectors/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    FooterComponent
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
