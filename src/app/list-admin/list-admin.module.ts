import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAdminRoutingModule } from './list-admin-routing.module';
import { SharedComponentsModule } from '../components/shared-components.module';
import { ListAdminComponent } from './list-admin.component';



@NgModule({
  declarations: [ListAdminComponent],
  imports: [
    CommonModule,
    ListAdminRoutingModule,
    SharedComponentsModule
  ]
})
export class ListAdminModule { }
