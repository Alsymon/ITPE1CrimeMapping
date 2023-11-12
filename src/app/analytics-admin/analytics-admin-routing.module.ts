import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsAdminComponent } from './analytics-admin.component';

const routes: Routes = [
  {
    path: '',
    component: AnalyticsAdminComponent
  }
]

@NgModule({
  declarations: [],
  imports:[ RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AnalyticsAdminRoutingModule { }
