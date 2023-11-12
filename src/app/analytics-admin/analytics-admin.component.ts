import { Component } from '@angular/core';
import { admin_topnav_data, admin_sidenav_data } from 'src/shared_data/dashboard_data';

@Component({
  selector: 'app-analytics-admin',
  templateUrl: './analytics-admin.component.html',
  styleUrls: ['./analytics-admin.component.scss']
})
export class AnalyticsAdminComponent {  
  admin = admin_topnav_data;
  admin_sidenav = admin_sidenav_data;
  
}
