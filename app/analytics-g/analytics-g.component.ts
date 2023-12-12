import { Component, OnInit } from '@angular/core';
import { guest_card_data, topnav_data, guest_sidenav_data } from 'src/shared_data/dashboard_data';

@Component({
  selector: 'app-analytics-g',
  templateUrl: './analytics-g.component.html',
  styleUrls: ['./analytics-g.component.scss']
})
export class AnalyticsGComponent implements OnInit {
  cardData = guest_card_data;
  guest = topnav_data;
  sidenav = guest_sidenav_data;


  ngOnInit(): void {
    //console.log ("This is card data", this.cardData)
   }
}