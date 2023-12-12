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
    path: "guest/dashboard",
    loadChildren: ()=> import('./dashboard-g/dashboard-g.module').then(mod=>mod.DashboardGModule),
  },
  {
    path: "guest/analytics",
    loadChildren: ()=> import('./analytics-g/analytics-g.module').then(mod=>mod.AnalyticsGModule),
  },
  {
    path: "guest/list",
    loadChildren: ()=> import('./list-g/list-g.module').then(mod=>mod.ListGModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
