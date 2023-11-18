import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListGRoutingModule } from './list-g-routing.module';
import { ListGComponent } from './list-g.component';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ListGComponent],
  imports: [
    CommonModule,
    ListGRoutingModule,
    SharedComponentsModule,
    FormsModule
  ]
})
export class ListGModule { }
