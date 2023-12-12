import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../components/shared-components.module';
import { AnalyticsGComponent } from './analytics-g.component';
import { AnalyticsGRoutingModule } from './analytics-g-routing.module';



@NgModule({
  declarations: [AnalyticsGComponent],
  imports: [
    CommonModule,
    AnalyticsGRoutingModule,
    SharedComponentsModule
  ]
})
export class AnalyticsGModule { }
