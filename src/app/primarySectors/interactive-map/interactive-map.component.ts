import { Component, OnInit } from '@angular/core';
import { getType } from '@angular/core/src/errors';

@Component({
  selector: 'desk-interactive-map',
  templateUrl: './interactive-map.component.html',
  styleUrls: ['./interactive-map.component.css']
})

export class InteractiveMapComponent implements OnInit {

  // region class variables 
  
    public zoom: number;
    public longitude: number;
    public latitude: number;
    public isGeolocationSupportEnabled: boolean;
    public opacity = 1.0;
    public width = 5;

  // endregion class variables 

  constructor() { }

  // region public functions 

    public ngOnInit(): void {
      this.initializeMap();
      // added the map-marker-icon from the following site:
      // http://www.myiconfinder.com/icon/place-base-gps-location-map-maps-marker-navigation-pin-location/2688
    }

    public initializeMap(): void {
      // TODO: Utilize information found within this link:
      // https://github.com/electron/electron/issues/9420
      // to acquire Google Geolocation API Key
      this.isGeolocationSupportEnabled = this.isGeolocationEnabled();
      if(this.isGeolocationSupportEnabled) {
        this.getUserLocation();
        if(this.latitude == undefined || this.longitude == undefined) {
          this.setDefaultValues();
        }
      }
      else {
        this.setDefaultValues();
      }
    }

    public isGeolocationEnabled(): boolean {
      if (navigator.geolocation) {
        // alert('Geolocation is supported!');
        return true;
      }
      else {
        // alert('Geolocation is not supported for this Browser!');
        return false;
      }
    }

    public setDefaultValues(): void {
      // default values
      this.zoom = 3;
      this.longitude= -0.13;
      this.latitude= 51.51;
    }

    public increaseZoom(): void {
      this.zoom = Math.min(this.zoom + 1, 18);
    }
  
    public decreaseZoom(): void {
      this.zoom = Math.max(this.zoom - 1, 1);
    }
  
    public increaseOpacity(): void {
      this.opacity = Math.min(this.opacity + 0.1, 1);
    }
  
    public decreaseOpacity(): void {
      this.opacity = Math.max(this.opacity - 0.1, 0);
    }

  // endregion public functions 

  // region private functions

    private getUserLocation(): void {
      // debugger
      let startPos;
      let geoSuccess = function(position) {
        startPos = position;
        this.latitude = startPos.coords.latitude;
        this.longitude = startPos.coords.longitude;
      };
      navigator.geolocation.getCurrentPosition(geoSuccess);
    }

  // endregion private functions
}
