import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes : Routes =[
  {
   path: "",
   component: LayoutComponent,
   children: [
    {
      path: "",redirectTo: "dashboard", pathMatch: "prefix",
    },
    {
      path: "dashboard",
       loadChildren:()=>import('./dashboard/dashboard.module').then(mod=>mod.DashboardModule),
      },
      {
        path: "list",
         loadChildren:()=>import('./list/list.module').then(mod=>mod.ListModule),
        },
        {
          path: "analytics",
           loadChildren:()=>import('./analytics/analytics.module').then(mod=>mod.AnalyticsModule),
        },
        {
          path: "user-management",
           loadChildren:()=>import('./user-management/user-management.module').then(mod=>mod.UserManagementModule),
        },
  ]
 }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
