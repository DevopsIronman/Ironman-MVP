import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule ,FormsModule  } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

 import { HTTP } from '@ionic-native/http/ngx'; 

@NgModule({
  declarations: [
    AppComponent,
    // IonTextAvatar,
    ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [
    StatusBar,
    
    SplashScreen,HTTP,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}