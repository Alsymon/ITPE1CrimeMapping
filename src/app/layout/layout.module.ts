import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedComponentsModule } from '../components/shared-components.module';
import { ScreenComponent } from '../components/screen/screen.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './list/list.component';
import { AnalyticsComponent } from './analytics/analytics.component';



@NgModule({
  declarations: [LayoutComponent,
ScreenComponent
],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedComponentsModule
  ]
})
export class LayoutModule { }
