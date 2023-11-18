import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
   @Input()account: string = '';
   @Input()link: string = '';
 
   constructor() { }
 
   ngOnInit(): void {
   }
 
 }
