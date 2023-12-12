import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListGComponent } from './list-g.component';

const routes: Routes = [{
  path: '',
  component: ListGComponent
}]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ListGRoutingModule { }
