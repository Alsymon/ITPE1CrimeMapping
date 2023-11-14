import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
   @ViewChild('myBarChart') myBarChart: ElementRef;

  // Add your data here
  data = {
    labels: ['Label1', 'Label2', 'Label3'],
    datasets: [{
      label: 'My Bar Chart',
      data: [10, 20, 30],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1
    }]
  };

  ngAfterViewInit() {
    const ctx = this.myBarChart.nativeElement.getContext('2d');
    const myBarChart = new Chart(ctx, {
      type: 'bar',
      data: this.data
    });
  }
}
