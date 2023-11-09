import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { CardComponent } from '../components/card/card.component';
import { ScreenComponent } from '../components/screen/screen.component';
import { TopnavComponent } from '../components/topnav/topnav.component';
import { MapComponent } from '../components/maps/maps.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../components/shared-components.module';



@NgModule({
  declarations: [
     DashboardComponent,
     ScreenComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedComponentsModule
  ]
})
export class DashboardModule { }
