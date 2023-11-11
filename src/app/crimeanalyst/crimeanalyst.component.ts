import { Component } from '@angular/core';
import { guest_card_data, topnav_data, guest_sidenav_data } from 'src/shared_data/dashboard_data';

@Component({
  selector: 'app-crimeanalyst',
  templateUrl: './crimeanalyst.component.html',
  styleUrls: ['./crimeanalyst.component.scss']
})
export class CrimeanalystComponent {
  cardData = guest_card_data;
  guest = topnav_data;
  sidenav = guest_sidenav_data;
}
