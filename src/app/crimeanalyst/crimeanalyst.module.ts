import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrimeanalystRoutingModule } from './crimeanalyst-routing.module';
import { SharedComponentsModule } from '../components/shared-components.module';
import { CrimeanalystComponent } from './crimeanalyst.component';



@NgModule({
  declarations: [CrimeanalystComponent],
  imports: [
    CommonModule,
    CrimeanalystRoutingModule,
    SharedComponentsModule
  ]
})
export class CrimeanalystModule { }
