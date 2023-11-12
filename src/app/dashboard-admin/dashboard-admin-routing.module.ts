import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardAdminComponent
  }
]

@NgModule({
  declarations: [],
  imports:[ RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class DashboardAdminRoutingModule { }
