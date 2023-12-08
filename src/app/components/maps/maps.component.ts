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
        [120.944459, 15.467432],
        [120.947858, 15.481119],
        [120.969646, 15.485096],
        [120.983727, 15.471995],
        [120.961271, 15.462519],
      ],
      [
        [120.965363, 15.480181],
        [120.961929, 15.488412],
        [120.979739, 15.487750],
        [120.972701, 15.473605],
        [120.970384, 15.468270],
      ],
      [
        [120.969182, 15.491431],
        [120.977061, 15.496880],
        [120.984134, 15.491177],
        [120.979839, 15.484256],
        [120.973849, 15.477196],
      ],
      [
        [120.947217, 15.476466],
        [120.942987, 15.469351],
        [120.945870, 15.459290],
        [120.962469, 15.466426],
        [120.974850, 15.469234],
      ],
      [
        [120.944429, 15.442878],
        [120.934855, 15.447061],
        [120.936145, 15.462007],
        [120.946781, 15.468719],
        [120.956749, 15.456128],
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
