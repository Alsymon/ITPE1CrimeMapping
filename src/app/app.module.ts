import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginModule } from './login/login.module';
import { LayoutModule } from './layout/layout.module';
import { ScreenComponent } from './components/screen/screen.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { NgxMapLibreGLModule } from '@maplibre/ngx-maplibre-gl';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    LayoutModule,
    NgxMapLibreGLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
