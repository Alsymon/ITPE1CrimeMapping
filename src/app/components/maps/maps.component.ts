import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import maplibregl, { LngLatLike } from 'maplibre-gl';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapComponent implements OnInit {
  ngOnInit(): void {

    const map = new maplibregl.Map({
      container: 'map',
      style: 'https://api.maptiler.com/maps/basic-v2/style.json?key=5b3XyvkSJl8L242vRkii',
      center: [122.931047, 11.591964], // Centered around the Philippines
      zoom: 5,
    });

  }
}
