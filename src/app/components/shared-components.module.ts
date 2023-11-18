import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { TopnavComponent } from './topnav/topnav.component';
import { MapComponent } from './maps/maps.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ScreenComponent } from './screen/screen.component';
import { ChartComponent } from './chart/chart.component';




@NgModule({
  declarations: [
    CardComponent,
    TopnavComponent,
    MapComponent,
    SidenavComponent,
    CardComponent,
    ChartComponent,
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    CardComponent,
    TopnavComponent,
    MapComponent,
    SidenavComponent,
    ChartComponent
  ]
})
export class SharedComponentsModule { }
