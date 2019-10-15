import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
// import { Http, Response ,Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Inject, Injectable } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

@Injectable()
export class HomePage {
  posts: any[] = [];
  resp: any[] = [];

  url: string;
  device_token: any;
  loginCredentials = { username: '', password: '', phone: '', url: '' };

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService, private http: HTTP, private localStorage: Storage, private router: Router) {

    // console.log("load");

    this.http.get('https://demo.atcampussolutions.com/app_api/instance.php', {}, {})
      .then(data => {
        // console.log(data.data);
        this.posts = data.data;
        // console.log(data.status);
        // console.log(data.data.institution_name); // data received by server
        this.posts = JSON.parse(data.data);
        // console.log (this.posts);

      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });

  }
  openWebpage() {
   
    // set a key/value
    this.localStorage.set('url', this.loginCredentials.url).then(() => {
      // console.log('Successfully added key/value pair url '+this.loginCredentials.url);
    });
    this.localStorage.set('username', this.loginCredentials.username).then(() => {
      //console.log('Successfully added key/value pair username '+this.loginCredentials.username);
    });
    this.localStorage.set('phone', this.loginCredentials.phone).then(() => {
      // console.log('Successfully added key/value pair phone '+this.loginCredentials.phone);
    });
    this.localStorage.set('password', this.loginCredentials.password).then(() => {
      // console.log('Successfully added key/value pair password '+this.loginCredentials.password);
    });

    //Post the device token and save the details to server
    this.localStorage.ready().then(() => {
      this.localStorage.get('device_token').then((val) => {
        this.device_token = val;

        console.log('device_token ====> '+ this.device_token);
        console.log('user_name ====> '+ this.loginCredentials.username);
        console.log('phone_no ====> '+ this.loginCredentials.phone)
       
        localStorage.setItem('phone_no',this.loginCredentials.phone);
        let phoneno = localStorage.getItem('phone_no');
        console.log('phone_no  ==>  '+ phoneno);

      });

    });
    this.router.navigateByUrl('login/');
    console.log('navigated');
  }
}



