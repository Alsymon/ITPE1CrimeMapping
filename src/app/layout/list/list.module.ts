import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './list-routing.module';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { ListComponent } from './list.component';



@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    SharedComponentsModule
  ]
})
export class ListModule { }
