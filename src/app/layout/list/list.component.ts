import { Component } from '@angular/core';
import { admin_card_data, admin_topnav_data, admin_sidenav_data } from 'src/shared_data/dashboard_data';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  cardData = admin_card_data;
  admin = admin_topnav_data;
  admin_sidenav = admin_sidenav_data;
}
