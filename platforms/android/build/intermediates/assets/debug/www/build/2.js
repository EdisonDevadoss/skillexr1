webpackJsonp([2],{

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillexSigninPageModule", function() { return SkillexSigninPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__skillex_signin__ = __webpack_require__(264);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SkillexSigninPageModule = (function () {
    function SkillexSigninPageModule() {
    }
    return SkillexSigninPageModule;
}());
SkillexSigninPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__skillex_signin__["a" /* SkillexSigninPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__skillex_signin__["a" /* SkillexSigninPage */]),
        ],
    })
], SkillexSigninPageModule);

//# sourceMappingURL=skillex-signin.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillexSigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SkillexSigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SkillexSigninPage = (function () {
    function SkillexSigninPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SkillexSigninPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SkillexSigninPage');
    };
    return SkillexSigninPage;
}());
SkillexSigninPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-skillex-signin',template:/*ion-inline-start:"/home/code-artist/Desktop/Skill/skillexr1/src/pages/skillex-signin/skillex-signin.html"*/'<!--\n  Generated template for the SkillexSigninPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n    <img src="../www/assets/img/header.png" class="header" alt=""> \n</ion-header>\n\n<ion-content color="bodyColor" padding>\n\n  <ion-list>\n    <ion-item class="inputBox" no-lines>\n      <ion-icon name="mail" outline item-start class="labelStyle"></ion-icon>\n      <!-- <ion-label floating>Email</ion-label> -->\n      <ion-input type="email" placeholder="Email"></ion-input>\n    </ion-item>\n    <br>\n    <ion-item class="inputBox" no-lines>\n        <!-- <img src="../www/assets/img/key.png" class="labelStyle" alt=""> -->\n        <ion-icon name="key" outline item-start class="labelStyle"></ion-icon>\n        <!-- <ion-label floating>Email</ion-label> -->\n        <ion-input type="password" placeholder="Password"></ion-input>\n    </ion-item>\n  </ion-list>\n  \n    <button ion-button color="button" class="myButton rightIcon" (click)="Signin()">\n        Sign in &nbsp;\n        <span class="button-inner">   \n        <ion-icon name="arrow-round-forward" icon-right></ion-icon>\n        </span>\n    </button>\n    <br><br><br>\n\n    <div class="container">\n        <hr class="hr-text" data-content="OR">\n    </div>\n         \n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <img src="../www/assets/img/social/fb.png" class="social" alt="">\n        </ion-col>\n        <ion-col>\n          <img src="../www/assets/img/social/google.png" class="social" alt="">\n        </ion-col>\n        <ion-col>\n          <img src="../www/assets/img/social/t.png" class="social" alt="">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    \n    <h5 class="forgetPass">Forgot Password?</h5>\n    <h5 class="report">Report <span>Signin Problem</span></h5> \n</ion-content>\n'/*ion-inline-end:"/home/code-artist/Desktop/Skill/skillexr1/src/pages/skillex-signin/skillex-signin.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], SkillexSigninPage);

//# sourceMappingURL=skillex-signin.js.map

/***/ })

});
//# sourceMappingURL=2.js.map