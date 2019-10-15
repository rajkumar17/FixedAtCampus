(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"vertical-align-content\">\n<ion-grid>\n<ion-row center>\n\t<ion-col center>\n\t\t<br><br><br><br>\n\t\t<img class=\"logo\" src=\"./assets/img/logo.png\">\n<br>\n<br>\n<br>\n<form  (ngSubmit)=\"openWebpage()\" #loginForm=\"ngForm\">\n\n  <ion-item>\n\n    <ion-label>Please select the Institution</ion-label>\n    <ion-select  name=\"instance\" [(ngModel)]=\"loginCredentials.url\" required>\n\n   <ion-select-option *ngFor=\"let x of posts\" [value]=\"x.api_url\">{{x.institution_name}}</ion-select-option>\n    </ion-select>\n\n  </ion-item>\n   \n    <ion-item>\n      <ion-label position=\"floating\">User Name</ion-label>\n      <ion-input type=\"text\" name=\"username\" [(ngModel)]=\"loginCredentials.username\" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Registered Mobile No</ion-label>\n      <ion-input type=\"number\" name=\"phone\" [(ngModel)]=\"loginCredentials.phone\" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input type=\"password\" name=\"password\" [(ngModel)]=\"loginCredentials.password\" required></ion-input>\n    </ion-item>\n    \n\n\n  <ion-button expand=\"block\" type=\"submit\" color=\"primary\">Login</ion-button>\n</form>\n          </ion-col>\t\n      </ion-row>\n</ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-home .button-md {\n  background-color: #0e5da0; }\n\napp-home .info-box {\n  padding-top: 10px; }\n\napp-home .list-header {\n  background-color: #ccc; }\n\napp-home .content {\n  text-align: center; }\n\napp-home .logo {\n  width: 75%;\n  margin-bottom: 40px; }\n\napp-home scroll-content {\n  display: flex;\n  flex-direction: row; }\n\napp-home ion-grid {\n  padding: 0;\n  height: 100%;\n  align-content: center !important;\n  align-items: center !important;\n  flex-direction: row !important; }\n\napp-home ion-row {\n  flex: 1; }\n\napp-home .item-label-stacked .text-input-md, app-home .item-label-floating .text-input-md {\n  margin: 8px 0;\n  width: 100%;\n  border: 1px solid #d1a0a4;\n  background: #f6f6f6;\n  height: 40px;\n  border-radius: 3px; }\n\napp-home .item-md.item-block .item-inner {\n  border: none;\n  padding-right: 0; }\n\napp-home .label-md[stacked] {\n  font-size: 1em;\n  color: #2a2a2a; }\n\napp-home a {\n  text-decoration: none;\n  border-bottom: 1px solid #b92835;\n  color: #2b2b2b;\n  display: inline-block;\n  margin-top: 50px; }\n\napp-home .item-md {\n  padding: 0px 20px; }\n\napp-home .input-cover {\n  position: static; }\n\napp-home .vertical-align-content > * {\n  display: flex !important;\n  align-content: center !important;\n  align-items: center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyYWxvZ2ljL0RvY3VtZW50cy9SYWprdW1hci9pb25pYy9BdENhbXB1c01hc3Rlcl9PY3QxNS9pb25pYzQtcHVzaC9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSx5QkFBd0IsRUFBQTs7QUFINUI7RUFNSSxpQkFBaUIsRUFBQTs7QUFOckI7RUFTSSxzQkFBc0IsRUFBQTs7QUFUMUI7RUFhQyxrQkFBaUIsRUFBQTs7QUFibEI7RUFpQkMsVUFBUztFQUNSLG1CQUFrQixFQUFBOztBQWxCcEI7RUFxQlEsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQXRCM0I7RUEwQlEsVUFBVTtFQUNWLFlBQVk7RUFDUCxnQ0FBK0I7RUFDdkMsOEJBQTZCO0VBQzdCLDhCQUE2QixFQUFBOztBQTlCbEM7RUFrQ1EsT0FBTyxFQUFBOztBQWxDZjtFQXNDRSxhQUFZO0VBQ1osV0FBVTtFQUNWLHlCQUF3QjtFQUN4QixtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGtCQUFpQixFQUFBOztBQTNDbkI7RUErQ0UsWUFBVztFQUNYLGdCQUFlLEVBQUE7O0FBaERqQjtFQW9ERSxjQUFhO0VBQ2IsY0FBYSxFQUFBOztBQXJEZjtFQXlERSxxQkFBb0I7RUFDcEIsZ0NBQStCO0VBQy9CLGNBQWE7RUFDWCxxQkFBb0I7RUFDcEIsZ0JBQWUsRUFBQTs7QUE3RG5CO0VBaUVFLGlCQUFnQixFQUFBOztBQWpFbEI7RUFvRUssZ0JBQWUsRUFBQTs7QUFwRXBCO0VBdUVLLHdCQUF1QjtFQUN2QixnQ0FBK0I7RUFDL0IsOEJBQTZCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWhvbWUge1xuXG4gIC5idXR0b24tbWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMGU1ZGEwO1xuICB9XG4uaW5mby1ib3gge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICB9XG4gIC5saXN0LWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgfVxuICAuY29udGVudFxuICB7XG5cdHRleHQtYWxpZ246Y2VudGVyO1xuICB9XG4gIC5sb2dvXG4gIHtcblx0d2lkdGg6NzUlO1xuICBtYXJnaW4tYm90dG9tOjQwcHg7XG4gIH1cbiAgICAgIHNjcm9sbC1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB9XG4gXG4gICAgaW9uLWdyaWQge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyIWltcG9ydGFudDtcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlciFpbXBvcnRhbnQ7XG4gICAgIGZsZXgtZGlyZWN0aW9uOiByb3chaW1wb3J0YW50O1xuICAgIH1cbiBcbiAgICBpb24tcm93IHtcbiAgICAgICAgZmxleDogMTtcbiAgICB9XG4gICAgLml0ZW0tbGFiZWwtc3RhY2tlZCAudGV4dC1pbnB1dC1tZCwgLml0ZW0tbGFiZWwtZmxvYXRpbmcgLnRleHQtaW5wdXQtbWRcbiAgICB7XG5cdFx0bWFyZ2luOjhweCAwO1xuXHRcdHdpZHRoOjEwMCU7XG5cdFx0Ym9yZGVyOjFweCBzb2xpZCAjZDFhMGE0O1xuXHRcdGJhY2tncm91bmQ6I2Y2ZjZmNjtcblx0XHRoZWlnaHQ6NDBweDtcblx0XHRib3JkZXItcmFkaXVzOjNweDtcbiAgICB9XG4gICAgLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lclxuICAgIHtcblx0XHRib3JkZXI6bm9uZTtcblx0XHRwYWRkaW5nLXJpZ2h0OjA7XG4gICAgfVxuICAgIC5sYWJlbC1tZFtzdGFja2VkXVxuICAgIHtcblx0XHRmb250LXNpemU6MWVtO1xuXHRcdGNvbG9yOiMyYTJhMmE7XG4gICAgfVxuICAgIGFcbiAgICB7XG5cdFx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XG5cdFx0Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2I5MjgzNTtcblx0XHRjb2xvcjojMmIyYjJiO1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi10b3A6NTBweDtcbiAgICB9XG4gICAgLml0ZW0tbWRcbiAgICB7XG5cdFx0cGFkZGluZzowcHggMjBweDtcbiAgICB9XG4gICAgLmlucHV0LWNvdmVyXG4gICAge3Bvc2l0aW9uOnN0YXRpY30gXG4gICAgLnZlcnRpY2FsLWFsaWduLWNvbnRlbnQgPiAqXG57XG4gICAgIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xuICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIhaW1wb3J0YW50O1xuICAgICBhbGlnbi1pdGVtczogY2VudGVyIWltcG9ydGFudDtcbn1cbi50bmNcbntcblxufVxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/fesm5/ngx-webstorage-service.js");







var HomePage = /** @class */ (function () {
    function HomePage(storage, http, localStorage, router) {
        // console.log("load");
        var _this = this;
        this.storage = storage;
        this.http = http;
        this.localStorage = localStorage;
        this.router = router;
        this.posts = [];
        this.resp = [];
        this.loginCredentials = { username: '', password: '', phone: '', url: '' };
        this.http.get('https://demo.atcampussolutions.com/app_api/instance.php', {}, {})
            .then(function (data) {
            // console.log(data.data);
            _this.posts = data.data;
            // console.log(data.status);
            // console.log(data.data.institution_name); // data received by server
            _this.posts = JSON.parse(data.data);
            // console.log (this.posts);
        })
            .catch(function (error) {
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        });
    }
    HomePage.prototype.openWebpage = function () {
        var _this = this;
        // set a key/value
        this.localStorage.set('url', this.loginCredentials.url).then(function () {
            // console.log('Successfully added key/value pair url '+this.loginCredentials.url);
        });
        this.localStorage.set('username', this.loginCredentials.username).then(function () {
            //console.log('Successfully added key/value pair username '+this.loginCredentials.username);
        });
        this.localStorage.set('phone', this.loginCredentials.phone).then(function () {
            // console.log('Successfully added key/value pair phone '+this.loginCredentials.phone);
        });
        this.localStorage.set('password', this.loginCredentials.password).then(function () {
            // console.log('Successfully added key/value pair password '+this.loginCredentials.password);
        });
        //Post the device token and save the details to server
        this.localStorage.ready().then(function () {
            _this.localStorage.get('device_token').then(function (val) {
                _this.device_token = val;
                console.log('device_token ====> ' + _this.device_token);
                console.log('user_name ====> ' + _this.loginCredentials.username);
                console.log('phone_no ====> ' + _this.loginCredentials.phone);
                localStorage.setItem('phone_no', _this.loginCredentials.phone);
                var phoneno = localStorage.getItem('phone_no');
                console.log('phone_no  ==>  ' + phoneno);
            });
        });
        this.router.navigateByUrl('login/');
        console.log('navigated');
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_5__["LOCAL_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map