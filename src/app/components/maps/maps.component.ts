import { Component, AfterViewInit } from '@angular/core';
import maplibregl, { LngLatLike } from 'maplibre-gl';
import { DataService } from '../data.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapComponent implements AfterViewInit {
  crimes: string[] = ['Theft', 'Assault', 'Rape', 'Drug Abuse', 'Possession of Firearms'];

  constructor(private dataService: DataService) {}

  ngAfterViewInit(): void {
    const map = new maplibregl.Map({
      container: 'map',
      style: 'https://api.maptiler.com/maps/bright-v2/style.json?key=5b3XyvkSJl8L242vRkii',
      center: [120.9675, 15.5017],
      zoom: 12,
    });

    // Wait for the map to finish loading
    map.on('load', () => {
      console.log('Map loaded successfully');

      // Make an API call to fetch coordinates data for all crimes
      this.dataService.getAllCrimes().subscribe((data) => {
        console.log('Crime data from API:', data);

        data.forEach((crime, index) => {
          const coordinates = crime.coordinates;
          const geoJsonCoordinates = [coordinates];

          map.addLayer({
            id: `highlighted-crime-${index}`,
            type: 'fill',
            source: {
              type: 'geojson',
              data: {
                type: 'Feature',
                geometry: {
                  type: 'Polygon',
                  coordinates: geoJsonCoordinates,
                },
              },
            },
            paint: {
              'fill-color': this.getColorForCrime(crime.crime),
              'fill-opacity': 0.5,
            },
          });

          // Add popup on hover
          map.on('mouseenter', `highlighted-crime-${index}`, (e) => {
            const totalCrimes = data.filter((c) => c.crime === crime.crime).length;
            const popupContent = `<strong>${crime.crime}</strong><br>Total: ${totalCrimes} crimes`;

            new maplibregl.Popup()
              .setLngLat(this.calculatePolygonCenter(coordinates) as LngLatLike)
              .setHTML(popupContent)
              .addTo(map);
          });

          // Remove popup on mouse leave
          map.on('mouseleave', `highlighted-crime-${index}`, () => {
            map.getCanvas().style.cursor = '';
          });
        });
      });
    });
  }

  getColorForCrime(crimeType: string): string {
    // Assign a color based on the crime type
    switch (crimeType) {
      case 'Theft':
        return '#FF0000'; // Red
      case 'Assault':
        return '#00FF00'; // Green
      case 'Rape':
        return '#0000FF'; // Blue
      case 'Drug Abuse':
        return '#FFFF00'; // Yellow
      case 'Possession of Firearms':
        return '#FF00FF'; // Purple
      default:
        return '#FFFFFF'; // Default color
    }
  }

  calculatePolygonCenter(coordinates: number[][]): [number, number] {
    const x = coordinates.reduce((acc, curr) => acc + curr[0], 0) / coordinates.length;
    const y = coordinates.reduce((acc, curr) => acc + curr[1], 0) / coordinates.length;
    return [x, y];
  }
}