import { Component, ElementRef, Input, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
   @Input()account: string = '';
   @Input()link: string = '';
   @Input()profile: string = '';
   @Input()admin: string = '';
   @Input()guest: string = '';
   isMenuOpened = false;

   toggleMenu() {
     this.isMenuOpened = !this.isMenuOpened;
   }
 
   closeMenu() {
     this.isMenuOpened = false;
   }
 
   @HostListener('document:click', ['$event'])
   onDocumentClick(event: Event): void {
     const isMenuToggler = this.elementRef.nativeElement.contains(event.target);
     if (!isMenuToggler) {
       this.closeMenu();
     }
   }
   ngOnInit(): void {
  }

   constructor(private elementRef: ElementRef) {}
 }

