import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrimelistRoutingModule } from './crimelist-routing.module';
import { SharedComponentsModule } from '../components/shared-components.module';
import { CrimelistComponent } from './crimelist.component';



@NgModule({
  declarations: [CrimelistComponent],
  imports: [
    CommonModule,
    CrimelistRoutingModule,
    SharedComponentsModule
  ]
})
export class CrimelistModule { }
