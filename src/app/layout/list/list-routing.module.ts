import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ListRoutingModule { }
