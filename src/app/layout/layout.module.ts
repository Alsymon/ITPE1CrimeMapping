import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { ScreenComponent } from '../components/screen/screen.component';
import { LayoutComponent } from './layout.component';
import { TopnavComponent } from '../components/topnav/topnav.component';
import { MapComponent } from '../components/maps/maps.component';




@NgModule({
  declarations: [
    ScreenComponent,
    LayoutComponent,
    TopnavComponent,
    MapComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
  ]
})
export class LayoutModule { }