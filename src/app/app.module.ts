import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { NgxMapLibreGLModule } from '@maplibre/ngx-maplibre-gl';

import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from './layout/layout.module';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { AnalyticsAdminComponent } from './analytics-admin/analytics-admin.component';
import { AnalyticsAdminModule } from './analytics-admin/analytics-admin.module';
import { DashboardAdminModule } from './dashboard-admin/dashboard-admin.module';
import { ListAdminModule } from './list-admin/list-admin.module';
@NgModule({
  declarations: [
    AppComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    NgxMapLibreGLModule,
    LayoutModule,
    AnalyticsAdminModule,
    DashboardAdminModule,
    ListAdminModule
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
