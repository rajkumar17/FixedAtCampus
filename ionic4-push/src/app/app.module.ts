import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FCM } from '@ionic-native/fcm/ngx';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { GlobalService } from './global.service';
import { IonicStorageModule } from '@ionic/storage';

import { HTTP } from '@ionic-native/http/ngx';
import { StorageServiceModule } from 'ngx-webstorage-service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    StorageServiceModule,
     AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
      FCM,
      GlobalService,
      HTTP,
      InAppBrowser,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
