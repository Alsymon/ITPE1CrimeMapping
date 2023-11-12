import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardAdminRoutingModule } from './dashboard-admin-routing.module';
import { DashboardAdminComponent } from './dashboard-admin.component';
import { SharedComponentsModule } from '../components/shared-components.module';



@NgModule({
  declarations: [DashboardAdminComponent],
  imports: [
    CommonModule,
    DashboardAdminRoutingModule,
    SharedComponentsModule
  ]
})
export class DashboardAdminModule { }
