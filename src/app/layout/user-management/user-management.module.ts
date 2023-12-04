import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management.component';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { UserModalComponent } from './user-modal/user-modal.component';



@NgModule({
  declarations: [UserManagementComponent, UserModalComponent],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    SharedComponentsModule,
    FormsModule,
    MatDialogModule
  ]
})
export class UserManagementModule { }
