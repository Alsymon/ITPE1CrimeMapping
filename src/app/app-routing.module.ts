import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "dashboard",
    loadChildren: ()=> import('./dashboard/dashboard.module').then(mod=>mod.DashboardModule),
  },
  {
    path: "",
    loadChildren: ()=> import('./login/login.module').then(mod=>mod.LoginModule),
  },
  {
    path: "admin",
    loadChildren: ()=> import('./admin/admin.module').then(mod=>mod.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
