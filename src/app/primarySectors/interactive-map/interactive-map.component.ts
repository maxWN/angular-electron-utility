import { Component, OnInit } from '@angular/core';
// import * as ol from 'openlayers';
// import { layer, render, Object, View, control, Overlay, Map } as ol from 'C:/Users/mnakel.SISFIRST/Documents/Development Files/LOCAL_PROJECTS/angular-desktop/node_modules/@types/openlayers';

@Component({
  selector: 'desk-interactive-map',
  templateUrl: './interactive-map.component.html',
  styleUrls: ['./interactive-map.component.css']
})
export class InteractiveMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // let map = new Map({
    //   layers: [
    //     new layer.Tile({
    //       source: new ol.source.OSM()
    //     })
    //   ],
    //   target: 'map',
    //   controls: control.defaults({
    //     attributionOptions: {
    //       collapsible: false
    //     }
    //   }),
    //   view: new View({
    //     center: [0, 0],
    //     zoom: 2
    //   })
    // });

    // document.getElementById('zoom-out').onclick = function() {
    //   let view = map.getView();
    //   let zoom = view.getZoom();
    //   view.setZoom(zoom - 1);
    // };

    // document.getElementById('zoom-in').onclick = function() {
    //   let view = map.getView();
    //   let zoom = view.getZoom();
    //   view.setZoom(zoom + 1);
    // };
  }

}
