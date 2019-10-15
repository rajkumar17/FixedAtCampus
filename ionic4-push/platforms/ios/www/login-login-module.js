(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-login .button-md {\n  background-color: #0e5da0; }\n\napp-login .info-box {\n  padding-top: 10px; }\n\napp-login .list-header {\n  background-color: #ccc; }\n\napp-login .content {\n  text-align: center; }\n\napp-login .logo {\n  width: 75%;\n  margin-bottom: 40px; }\n\napp-login scroll-content {\n  display: flex;\n  flex-direction: row; }\n\napp-login ion-grid {\n  padding: 0;\n  height: 100%;\n  align-content: center !important;\n  align-items: center !important;\n  flex-direction: row !important; }\n\napp-login ion-row {\n  flex: 1; }\n\napp-login .item-label-stacked .text-input-md, app-login .item-label-floating .text-input-md {\n  margin: 8px 0;\n  width: 100%;\n  border: 1px solid #d1a0a4;\n  background: #f6f6f6;\n  height: 40px;\n  border-radius: 3px; }\n\napp-login .item-md.item-block .item-inner {\n  border: none;\n  padding-right: 0; }\n\napp-login .label-md[stacked] {\n  font-size: 1em;\n  color: #2a2a2a; }\n\napp-login a {\n  text-decoration: none;\n  border-bottom: 1px solid #b92835;\n  color: #2b2b2b;\n  display: inline-block;\n  margin-top: 50px; }\n\napp-login .item-md {\n  padding: 0px 20px; }\n\napp-login .input-cover {\n  position: static; }\n\napp-login .vertical-align-content > * {\n  display: flex !important;\n  align-content: center !important;\n  align-items: center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyYWxvZ2ljL0RvY3VtZW50cy9SYWprdW1hci9pb25pYy9BdENhbXB1c01hc3Rlcl9PY3QxNS9pb25pYzQtcHVzaC9zcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLHlCQUF3QixFQUFBOztBQUg1QjtFQU1JLGlCQUFpQixFQUFBOztBQU5yQjtFQVNJLHNCQUFzQixFQUFBOztBQVQxQjtFQWFDLGtCQUFpQixFQUFBOztBQWJsQjtFQWlCQyxVQUFTO0VBQ1IsbUJBQWtCLEVBQUE7O0FBbEJwQjtFQXFCUSxhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBdEIzQjtFQTBCUSxVQUFVO0VBQ1YsWUFBWTtFQUNQLGdDQUErQjtFQUN2Qyw4QkFBNkI7RUFDN0IsOEJBQTZCLEVBQUE7O0FBOUJsQztFQWtDUSxPQUFPLEVBQUE7O0FBbENmO0VBc0NFLGFBQVk7RUFDWixXQUFVO0VBQ1YseUJBQXdCO0VBQ3hCLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsa0JBQWlCLEVBQUE7O0FBM0NuQjtFQStDRSxZQUFXO0VBQ1gsZ0JBQWUsRUFBQTs7QUFoRGpCO0VBb0RFLGNBQWE7RUFDYixjQUFhLEVBQUE7O0FBckRmO0VBeURFLHFCQUFvQjtFQUNwQixnQ0FBK0I7RUFDL0IsY0FBYTtFQUNYLHFCQUFvQjtFQUNwQixnQkFBZSxFQUFBOztBQTdEbkI7RUFpRUUsaUJBQWdCLEVBQUE7O0FBakVsQjtFQW9FSyxnQkFBZSxFQUFBOztBQXBFcEI7RUF1RUssd0JBQXVCO0VBQ3ZCLGdDQUErQjtFQUMvQiw4QkFBNkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1sb2dpbiB7XG5cbiAgLmJ1dHRvbi1tZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwZTVkYTA7XG4gIH1cbi5pbmZvLWJveCB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gIH1cbiAgLmxpc3QtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICB9XG4gIC5jb250ZW50XG4gIHtcblx0dGV4dC1hbGlnbjpjZW50ZXI7XG4gIH1cbiAgLmxvZ29cbiAge1xuXHR3aWR0aDo3NSU7XG4gIG1hcmdpbi1ib3R0b206NDBweDtcbiAgfVxuICAgICAgc2Nyb2xsLWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIH1cbiBcbiAgICBpb24tZ3JpZCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIhaW1wb3J0YW50O1xuICAgICBhbGlnbi1pdGVtczogY2VudGVyIWltcG9ydGFudDtcbiAgICAgZmxleC1kaXJlY3Rpb246IHJvdyFpbXBvcnRhbnQ7XG4gICAgfVxuIFxuICAgIGlvbi1yb3cge1xuICAgICAgICBmbGV4OiAxO1xuICAgIH1cbiAgICAuaXRlbS1sYWJlbC1zdGFja2VkIC50ZXh0LWlucHV0LW1kLCAuaXRlbS1sYWJlbC1mbG9hdGluZyAudGV4dC1pbnB1dC1tZFxuICAgIHtcblx0XHRtYXJnaW46OHB4IDA7XG5cdFx0d2lkdGg6MTAwJTtcblx0XHRib3JkZXI6MXB4IHNvbGlkICNkMWEwYTQ7XG5cdFx0YmFja2dyb3VuZDojZjZmNmY2O1xuXHRcdGhlaWdodDo0MHB4O1xuXHRcdGJvcmRlci1yYWRpdXM6M3B4O1xuICAgIH1cbiAgICAuaXRlbS1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyXG4gICAge1xuXHRcdGJvcmRlcjpub25lO1xuXHRcdHBhZGRpbmctcmlnaHQ6MDtcbiAgICB9XG4gICAgLmxhYmVsLW1kW3N0YWNrZWRdXG4gICAge1xuXHRcdGZvbnQtc2l6ZToxZW07XG5cdFx0Y29sb3I6IzJhMmEyYTtcbiAgICB9XG4gICAgYVxuICAgIHtcblx0XHR0ZXh0LWRlY29yYXRpb246bm9uZTtcblx0XHRib3JkZXItYm90dG9tOjFweCBzb2xpZCAjYjkyODM1O1xuXHRcdGNvbG9yOiMyYjJiMmI7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXRvcDo1MHB4O1xuICAgIH1cbiAgICAuaXRlbS1tZFxuICAgIHtcblx0XHRwYWRkaW5nOjBweCAyMHB4O1xuICAgIH1cbiAgICAuaW5wdXQtY292ZXJcbiAgICB7cG9zaXRpb246c3RhdGljfSBcbiAgICAudmVydGljYWwtYWxpZ24tY29udGVudCA+ICpcbntcbiAgICAgZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XG4gICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciFpbXBvcnRhbnQ7XG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIhaW1wb3J0YW50O1xufVxuLnRuY1xue1xuXG59XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/fesm5/ngx-webstorage-service.js");







var LoginPage = /** @class */ (function () {
    function LoginPage(storage, global, localStorage, iab) {
        this.storage = storage;
        this.global = global;
        this.localStorage = localStorage;
        this.iab = iab;
        this.url = '';
        this.username = '';
        this.password = '';
        this.phone_no = '';
        this.deviceToken = '';
    }
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.localStorage.get('url').then(function (val) {
            _this.url = val;
        });
        this.localStorage.get('username').then(function (val1) {
            _this.username = val1;
        });
        this.localStorage.get('password').then(function (val2) {
            _this.password = val2;
            _this.deviceToken = _this.storage.get('device_Token');
            _this.phone_no = localStorage.getItem('phone_no');
            console.log('Login.ts phone_no  ==>  ' + _this.phone_no);
            console.log('Login.ts deviceToken  ==>  ' + _this.deviceToken);
            _this.url = _this.url + "/user_roles/php/ajax_login_app.php?username=" + _this.username + "&password=" + _this.password + "&device_token=" + _this.deviceToken + "&phone_no=" + _this.phone_no;
            console.log('INAPPWEB URL = ' + _this.url);
            var browser = _this.iab.create(_this.url, '_blank', "hidden=no,location=no,clearsessioncache=no,clearcache=no,toolbar=no");
        });
        //    this.global.username = "VASHISTHA";
        // this.global.password = "12345";
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_5__["LOCAL_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map