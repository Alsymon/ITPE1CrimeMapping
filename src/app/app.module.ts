import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { NgxMapLibreGLModule } from '@maplibre/ngx-maplibre-gl';
import { LayoutModule } from './layout/layout.module';
import { AnalyticsGModule } from './analytics-g/analytics-g.module';
import { DashboardGModule } from './dashboard-g/dashboard-g.module';
import { ListGModule } from './list-g/list-g.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
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
    AnalyticsGModule,
    ListGModule,
    DashboardGModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
