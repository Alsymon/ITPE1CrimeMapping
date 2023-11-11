import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrimeanalystComponent } from './crimeanalyst.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CrimeanalystComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrimeanalystRoutingModule { }
