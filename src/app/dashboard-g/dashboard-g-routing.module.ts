import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { DashboardGComponent } from './dashboard-g.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: DashboardGComponent
}]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class DashboardGRoutingModule { }
