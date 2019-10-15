(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["second-second-module"],{

/***/ "./src/app/second/second.module.ts":
/*!*****************************************!*\
  !*** ./src/app/second/second.module.ts ***!
  \*****************************************/
/*! exports provided: SecondPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondPageModule", function() { return SecondPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _second_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./second.page */ "./src/app/second/second.page.ts");







var routes = [
    {
        path: '',
        component: _second_page__WEBPACK_IMPORTED_MODULE_6__["SecondPage"]
    }
];
var SecondPageModule = /** @class */ (function () {
    function SecondPageModule() {
    }
    SecondPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_second_page__WEBPACK_IMPORTED_MODULE_6__["SecondPage"]]
        })
    ], SecondPageModule);
    return SecondPageModule;
}());



/***/ }),

/***/ "./src/app/second/second.page.html":
/*!*****************************************!*\
  !*** ./src/app/second/second.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/second/second.page.scss":
/*!*****************************************!*\
  !*** ./src/app/second/second.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY29uZC9zZWNvbmQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/second/second.page.ts":
/*!***************************************!*\
  !*** ./src/app/second/second.page.ts ***!
  \***************************************/
/*! exports provided: SecondPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondPage", function() { return SecondPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");





var SecondPage = /** @class */ (function () {
    function SecondPage(route, localStorage, iab) {
        this.route = route;
        this.localStorage = localStorage;
        this.iab = iab;
        this.price = '';
        this.url = '';
        this.username = '';
        this.password = '';
        this.price = this.route.snapshot.params['price'];
    }
    SecondPage.prototype.ngOnInit = function () {
        var _this = this;
        this.localStorage.get('url').then(function (val) {
            _this.url = val;
        });
        this.localStorage.get('username').then(function (val1) {
            _this.username = val1;
        });
        this.localStorage.get('password').then(function (val2) {
            _this.password = val2;
            _this.url = _this.url + "/user_roles/php/ajax_login_app.php?username=" + _this.username + "&password=" + _this.password + "&notification=yes";
            // console.log(this.url);
            var browser = _this.iab.create(_this.url, '_self', "hidden=no,location=no,clearsessioncache=no,clearcache=no");
        });
        //    this.global.username = "VASHISTHA";
        // this.global.password = "12345";
    };
    SecondPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-second',
            template: __webpack_require__(/*! ./second.page.html */ "./src/app/second/second.page.html"),
            styles: [__webpack_require__(/*! ./second.page.scss */ "./src/app/second/second.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"]])
    ], SecondPage);
    return SecondPage;
}());



/***/ })

}]);
//# sourceMappingURL=second-second-module.js.map