import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input()guest: string = '';
  @Input()admin: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
