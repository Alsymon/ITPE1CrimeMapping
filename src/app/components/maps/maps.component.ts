import { Component, OnInit } from '@angular/core';
import maplibregl, {  } from 'maplibre-gl';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapComponent implements OnInit {
  ngOnInit(): void {

    const map = new maplibregl.Map({
      container: 'map',
      style: 'https://api.maptiler.com/maps/bright-v2/style.json?key=5b3XyvkSJl8L242vRkii',
      center: [120.9675, 15.5017], 
      zoom: 12,
    });

  }
}
