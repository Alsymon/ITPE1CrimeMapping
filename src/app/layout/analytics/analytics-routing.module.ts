import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsComponent } from './analytics.component';

const routes: Routes = [
  {
    path: '',
    component: AnalyticsComponent
  }
]

@NgModule({
  declarations: [],
 imports:[ RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AnalyticsRoutingModule { }
