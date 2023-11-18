import { Component, OnInit } from '@angular/core';
import { admin_card_data, admin_sidenav_data, admin_topnav_data } from 'src/shared_data/dashboard_data';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  cardData = admin_card_data;
  admin = admin_topnav_data;
  admin_sidenav = admin_sidenav_data;

  ngOnInit(): void {
    //console.log ("This is card data", this.cardData)
   }
}

