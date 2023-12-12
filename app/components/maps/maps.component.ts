import { Component, AfterViewInit } from '@angular/core';
import maplibregl, { LngLatLike } from 'maplibre-gl';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const map = new maplibregl.Map({
      container: 'map',
      style: 'https://api.maptiler.com/maps/bright-v2/style.json?key=5b3XyvkSJl8L242vRkii',
      center: [120.9675, 15.5017], 
      zoom: 12,
    });

    var coordinatesSets = [
      [
        [120.96658, 15.48832],
        [120.96931, 15.48832],
        [120.96931, 15.48677],
        [120.96658, 15.48677],
        [120.96658, 15.48832],
      ],
      [
        [120.975, 15.495],
        [120.985, 15.495],
        [120.985, 15.500],
        [120.975, 15.500],
        [120.975, 15.495],
      ],
      [
        [120.985, 15.500],
        [120.995, 15.500],
        [120.995, 15.505],
        [120.985, 15.505],
        [120.985, 15.500],
      ],
      [
        [120.995, 15.505],
        [121.005, 15.505],
        [121.005, 15.510],
        [120.995, 15.510],
        [120.995, 15.505],
      ],
      [
        [121.005, 15.510],
        [121.015, 15.510],
        [121.015, 15.515],
        [121.005, 15.515],
        [121.005, 15.510],
      ],

      // Add more sets of coordinates as needed
    ];

    var colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#9900FF'];

    var crimeLabels = [
      'Theft',
      'Rape',
      'Assault',
      'Drug Abuse',
      'Possession of Firearms',
    ];

    map.on('load', () => {
      coordinatesSets.forEach((coordinates, index) => {
        map.addLayer({
          id: `cabanatuan-polygon-${index}`,
          type: 'fill',
          source: {
            type: 'geojson',
            data: {
              type: 'Feature',
              geometry: {
                type: 'Polygon',
                coordinates: [coordinates],
              },
            },
          },
          paint: {
            'fill-color': colors[index],
            'fill-opacity': 0.35,
          },
        });

        // Add popup on hover
        map.on('mouseenter', `cabanatuan-polygon-${index}`, (e) => {
          const center = this.calculatePolygonCenter(coordinates);

          new maplibregl.Popup()
            .setLngLat(center as LngLatLike)
            .setHTML(`${crimeLabels[index]}`)
            .addTo(map);
        });

        // Remove popup on mouse leave
        map.on('mouseleave', `cabanatuan-polygon-${index}`, () => {
          map.getCanvas().style.cursor = '';
        });
      });
    });
  }

  calculatePolygonCenter(coordinates: number[][]): [number, number] {
    const x = coordinates.reduce((acc, curr) => acc + curr[0], 0) / coordinates.length;
    const y = coordinates.reduce((acc, curr) => acc + curr[1], 0) / coordinates.length;
    return [x, y];
  }
}
