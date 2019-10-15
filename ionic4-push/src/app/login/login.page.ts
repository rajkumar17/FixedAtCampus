import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { GlobalService } from '../global.service';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Inject, Injectable } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

@Injectable()
export class LoginPage implements OnInit  {
	  url: any='' ;
	  username :any='';
	  password :any='';
    phone_no : any='';
    deviceToken: any='';

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService,public global: GlobalService,public localStorage: Storage,private iab: InAppBrowser) {

   }

  ngOnInit() {

           this.localStorage.get('url').then((val)=>{
          this.url =val;
           });
          this.localStorage.get('username').then((val1)=>{
          this.username =val1;
           });
          this.localStorage.get('password').then((val2)=>{
          this.password =val2;


          this.deviceToken = this.storage.get('device_Token')
          this.phone_no = localStorage.getItem('phone_no');

          console.log('Login.ts phone_no  ==>  '+ this.phone_no);
          console.log('Login.ts deviceToken  ==>  '+ this.deviceToken);

          this.url = this.url+"/user_roles/php/ajax_login_app.php?username="+this.username+"&password="+this.password+"&device_token="+this.deviceToken+"&phone_no="+this.phone_no;
          console.log('INAPPWEB URL = '+this.url);
          const browser = this.iab.create(this.url, '_blank', "hidden=no,location=no,clearsessioncache=no,clearcache=no,toolbar=no");
        
           });
         //    this.global.username = "VASHISTHA";
      	// this.global.password = "12345";
  }

}
