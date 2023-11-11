import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CrimelistComponent } from './crimelist.component';

const routes: Routes = [
  {
    path: '',
    component: CrimelistComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrimelistRoutingModule { }
