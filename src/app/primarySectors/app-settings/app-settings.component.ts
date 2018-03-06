import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'desk-app-settings',
  templateUrl: './app-settings.component.html',
  styleUrls: ['./app-settings.component.css']
})
export class AppSettingsComponent implements OnInit {

  //region class variables 

    public devModeSetting: boolean=false;

  //endregion class variables 

  constructor(private _electronService: ElectronService) { }

  public ngOnInit():void {
  }

  public setDevMode():void {
    this.devModeSetting = ! this.devModeSetting;
    if(this.devModeSetting) {
      this._electronService.ipcRenderer.send('open-dev-menu');
    }
    else {
      this._electronService.ipcRenderer.send('close-dev-menu');
    }
  }

}
