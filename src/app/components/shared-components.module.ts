import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { TopnavComponent } from './topnav/topnav.component';
import { MapComponent } from './maps/maps.component';



@NgModule({
  declarations: [
    CardComponent,
    TopnavComponent,
    MapComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    TopnavComponent,
    MapComponent,
  ]
})
export class SharedComponentsModule { }
