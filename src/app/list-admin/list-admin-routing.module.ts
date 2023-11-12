import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListAdminComponent } from './list-admin.component';

const routes: Routes = [
  {
    path: '',
    component: ListAdminComponent
  }
]

@NgModule({
  declarations: [],
  imports:[ RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ListAdminRoutingModule { }
