import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsAdminComponent } from './analytics-admin.component';
import { SharedComponentsModule } from '../components/shared-components.module';
import { AnalyticsAdminRoutingModule } from './analytics-admin-routing.module';



@NgModule({
  declarations: [AnalyticsAdminComponent],
  imports: [
    CommonModule,
    AnalyticsAdminRoutingModule,
    SharedComponentsModule
  ]
})
export class AnalyticsAdminModule { }
