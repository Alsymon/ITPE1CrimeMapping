import { Component, OnInit } from '@angular/core';
import { admin_card_data, admin_sidenav_data, admin_topnav_data, guest_sidenav_data } from 'src/shared_data/dashboard_data';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  cardData = admin_card_data;
  admin = admin_topnav_data;
  sidenav_admin = admin_sidenav_data;
  ngOnInit(): void {
    //console.log ("This is card data", this.cardData)
   }
}

