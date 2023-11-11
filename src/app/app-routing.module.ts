import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: ()=> import('./login/login.module').then(mod=>mod.LoginModule),
  },
  {
    path: "dashboard",
    loadChildren: ()=> import('./dashboard/dashboard.module').then(mod=>mod.DashboardModule),
  },
  {
    path: "admin",
    loadChildren: ()=> import('./admin/admin.module').then(mod=>mod.AdminModule),
  },
  {
    path: "list",
    loadChildren: ()=> import('./crimelist/crimelist.module').then(mod=>mod.CrimelistModule),
  },
  {
    path: "analystics",
    loadChildren: ()=> import('./crimeanalyst/crimeanalyst.module').then(mod=>mod.CrimeanalystModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
