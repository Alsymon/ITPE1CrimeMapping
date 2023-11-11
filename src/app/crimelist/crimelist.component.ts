import { Component } from '@angular/core';
import { guest_card_data, guest_sidenav_data, topnav_data } from 'src/shared_data/dashboard_data';

@Component({
  selector: 'app-crimelist',
  templateUrl: './crimelist.component.html',
  styleUrls: ['./crimelist.component.scss']
})
export class CrimelistComponent {
  cardData = guest_card_data;
  guest = topnav_data;
  sidenav = guest_sidenav_data;
}
