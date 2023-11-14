import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsGComponent } from './analytics-g.component';

const routes: Routes = [{
  path: '',
  component:AnalyticsGComponent
}]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class AnalyticsGRoutingModule { }
