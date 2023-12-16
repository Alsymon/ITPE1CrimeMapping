import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './list-routing.module';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { ListComponent } from './list.component';
import { FormsModule } from '@angular/forms';
import { CrimeModalComponent } from './crime-modal/crime-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdateModalComponent } from './update-modal/update-modal.component';



@NgModule({
  declarations: [ListComponent, CrimeModalComponent, UpdateModalComponent, ],
  imports: [
    CommonModule,
    ListRoutingModule,
    SharedComponentsModule,
    FormsModule,
    MatDialogModule
  ]
})
export class ListModule { }
