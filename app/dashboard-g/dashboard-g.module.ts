import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardGComponent } from './dashboard-g.component';
import { DashboardGRoutingModule } from './dashboard-g-routing.module';
import { SharedComponentsModule } from '../components/shared-components.module';



@NgModule({
  declarations: [DashboardGComponent],
  imports: [
    CommonModule,
    DashboardGRoutingModule,
    SharedComponentsModule
  ]
})
export class DashboardGModule { }
