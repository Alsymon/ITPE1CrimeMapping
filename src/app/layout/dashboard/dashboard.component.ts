import { Component, OnInit } from '@angular/core';
import { admin_card_data, } from 'src/shared_data/dashboard_data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cardData = admin_card_data;


  ngOnInit(): void {
    //console.log ("This is card data", this.cardData)
   }
}

