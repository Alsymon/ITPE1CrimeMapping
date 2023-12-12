import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card-small',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
 /* @Input()name : string = "";
  @Input()position : string = "";
  @Input()company  : string = "";
  @Input()userImage : string = ""; */
  @Input()title : string = '';
  @Input()content : string = '';
  @Input()value: string = '';
  @Input()link: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}