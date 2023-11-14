import { Component, OnInit } from '@angular/core';
import { admin_card_data, admin_topnav_data, admin_sidenav_data } from 'src/shared_data/dashboard_data';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  cardData = admin_card_data;
  admin = admin_topnav_data;
  admin_sidenav = admin_sidenav_data;

  ngOnInit(): void {
    //console.log ("This is card data", this.cardData)
   }
}
