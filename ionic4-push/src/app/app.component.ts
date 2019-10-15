import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Inject, Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
@Injectable()
export class AppComponent {

  login_url: any = '';
  username: any = '';
  password: any = '';
  device_token: any = '';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm: FCM,
    private router: Router,
    public localStorage: Storage,
    public nav: NavController,
    @Inject(LOCAL_STORAGE) private storage: StorageService,
  ) {
    this.initializeApp();
  }
  initPushNotification() {
    this.fcm.subscribeToTopic('people');

    this.fcm.getToken().then(token => {
      //register token
      this.device_token = token
      localStorage.setItem('device_token',this.device_token);
      let myItemDeviceToken = localStorage.getItem('device_token');
      console.log('myItemDeviceToken  ==>  '+ myItemDeviceToken);
      this.storage.set('device_Token', this.device_token);
      //backend.registerToken(token);
      console.log('*************_________-------*** device_Token ---- '+this.storage.get('device_Token') || 'LocaL storage is empty');
    })

    this.fcm.onNotification().subscribe(data => {
      if (data.wasTapped) {
        console.log("Received in background");
      } else {
        console.log("Received in foreground");
      };
    })

    this.fcm.onTokenRefresh().subscribe(token => {
      //register token
      this.device_token = token
      localStorage.setItem('device_token',this.device_token);
      let myItemDeviceToken = localStorage.getItem('device_token');
      console.log('myItemDeviceToken  ==>  '+ myItemDeviceToken);
      this.storage.set('device_Token', this.device_token);
      console.log('*************_________-------*** device_Token ---- '+this.storage.get('device_Token') || 'LocaL storage is empty');
    })

    this.fcm.unsubscribeFromTopic('people');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      console.log("inside app ready");
      this.localStorage.ready().then(() => {
        this.localStorage.get('url').then((val) => {
          // console.log(val);
          this.login_url = val;
          // console.log(this.login_url);

          if (this.login_url === null) {
            this.router.navigateByUrl('/home');
            console.log("------*_*_**__*_*_*_*_*_**_  initializeApp IF check ------*_*_**__*_*_*_*_*_**_  ");
            try {
              this.initPushNotification();
            } catch (error) {
              console.log('initPushNotification error ==>' + error);
            }
          } else {
            console.log("------*_*_**__*_*_*_*_*_**_  initializeApp ELSE check ------*_*_**__*_*_*_*_*_**_  ");
            this.router.navigateByUrl('login/');

          }//close of else
        });

      });
    });
  }
}
