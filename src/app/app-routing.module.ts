import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: "",
    loadChildren: ()=> import('./login/login.module').then(mod=>mod.LoginModule),
  },
  {
    path: "layout",
    loadChildren: ()=> import('./layout/layout.module').then(mod=>mod.LayoutModule),
  },
  {
    path: "admin-dashboard",
    loadChildren: ()=> import('./dashboard-admin/dashboard-admin.module').then(mod=>mod.DashboardAdminModule),
  },
  {
    path: "admin-analytics",
    loadChildren: ()=> import('./analytics-admin/analytics-admin.module').then(mod=>mod.AnalyticsAdminModule),
  },
  {
    path: "admin-list",
    loadChildren: ()=> import('./list-admin/list-admin.module').then(mod=>mod.ListAdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
