import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input()guest: string = '';
  @Input()admin: string = '';
  @Input()list: string = '';
  @Input()analytics: string = '';
  @Input()usermanagement: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
