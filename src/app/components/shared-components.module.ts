import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { TopnavComponent } from './topnav/topnav.component';
import { MapComponent } from './maps/maps.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ScreenComponent } from './screen/screen.component';
import { GraphComponent } from './graph/graph.component';




@NgModule({
  declarations: [
    CardComponent,
    TopnavComponent,
    MapComponent,
    SidenavComponent,
    CardComponent,
    GraphComponent,

  ],
  imports: [
    CommonModule,

  ],
  exports: [
    CardComponent,
    TopnavComponent,
    MapComponent,
    SidenavComponent,
    GraphComponent
  ]
})
export class SharedComponentsModule { }
