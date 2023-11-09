import { Component, OnInit } from '@angular/core';
import { card_data } from 'src/shared_data/dashboard_data';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  cardData = card_data;

  ngOnInit(): void {
    //console.log ("This is card data", this.cardData)
   }
}
