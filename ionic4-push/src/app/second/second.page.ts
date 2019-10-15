import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {
price: any = '';
	  url: any='' ;
	  username :any='';
	  password :any='';

constructor(private route: ActivatedRoute,public localStorage: Storage,private iab: InAppBrowser) {
  this.price = this.route.snapshot.params['price'];
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


            this.url = this.url+"/user_roles/php/ajax_login_app.php?username="+this.username+"&password="+this.password+"&notification=yes";
         // console.log(this.url);
         const browser = this.iab.create(this.url, '_self', "hidden=no,location=no,clearsessioncache=no,clearcache=no");
        
           });

     

         //    this.global.username = "VASHISTHA";
      	// this.global.password = "12345";
       



  }

}
