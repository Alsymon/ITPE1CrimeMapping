import { Component, OnInit } from '@angular/core';
import { guest_card_data, topnav_data, guest_sidenav_data } from 'src/shared_data/dashboard_data';

@Component({
  selector: 'app-dashboard-g',
  templateUrl: './dashboard-g.component.html',
  styleUrls: ['./dashboard-g.component.scss']
})
export class DashboardGComponent implements OnInit {
  cardData = guest_card_data;
  guest = topnav_data;
  sidenav = guest_sidenav_data;


  ngOnInit(): void {
    //console.log ("This is card data", this.cardData)
   }
}
