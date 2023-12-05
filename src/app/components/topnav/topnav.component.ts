import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
   @Input()account: string = '';
   @Input()link: string = '';
  
  isMenuOpened: boolean = false;

toggleMenu() {
  this.isMenuOpened = !this.isMenuOpened;
  console.log('isMenuOpened:', this.isMenuOpened);
}

  clickedOutside(): void {
    this.isMenuOpened = false;
  }

   constructor() { }
 
   ngOnInit(): void {
   }
 
 }
