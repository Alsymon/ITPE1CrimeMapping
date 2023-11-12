import { Component } from '@angular/core';
import { admin_sidenav_data, admin_topnav_data } from 'src/shared_data/dashboard_data';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.scss']
})
export class ListAdminComponent {
  
  admin = admin_topnav_data;
  admin_sidenav = admin_sidenav_data;
}

