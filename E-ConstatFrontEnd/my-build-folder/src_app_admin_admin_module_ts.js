"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_admin_admin_module_ts"],{

/***/ 3176:
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPageRoutingModule": () => (/* binding */ AdminPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_role_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/role.guard */ 5005);
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.page */ 153);





const routes = [
    {
        path: '',
        component: _admin_page__WEBPACK_IMPORTED_MODULE_1__.AdminPage, canActivate: [_services_role_guard__WEBPACK_IMPORTED_MODULE_0__.RoleGuard]
    }
];
let AdminPageRoutingModule = class AdminPageRoutingModule {
};
AdminPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], AdminPageRoutingModule);



/***/ }),

/***/ 7095:
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPageModule": () => (/* binding */ AdminPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-routing.module */ 3176);
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.page */ 153);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 9991);








let AdminPageModule = class AdminPageModule {
};
AdminPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule
        ],
        declarations: [_admin_page__WEBPACK_IMPORTED_MODULE_1__.AdminPage]
    })
], AdminPageModule);



/***/ }),

/***/ 153:
/*!*************************************!*\
  !*** ./src/app/admin/admin.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPage": () => (/* binding */ AdminPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _admin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.page.html?ngResource */ 376);
/* harmony import */ var _admin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.page.scss?ngResource */ 1162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/user */ 1612);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _services_constat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/constat.service */ 737);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ 3071);










let AdminPage = class AdminPage {
    constructor(alertController, serviceUser, serviceConstat, serviceAuth, router) {
        this.alertController = alertController;
        this.serviceUser = serviceUser;
        this.serviceConstat = serviceConstat;
        this.serviceAuth = serviceAuth;
        this.router = router;
        this.listConstat = [];
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_2__.User();
        this.search = "";
        this.username = localStorage.getItem('username');
    }
    ngOnInit() {
        this.serviceConstat.getAllConstat().subscribe((data) => this.listConstat = data);
        this.serviceUser.getuser(this.username).subscribe((data) => this.user = data);
    }
    deleteConstat(id) {
        this.serviceConstat.deleteConstatById(id).subscribe(() => {
            this.serviceConstat.getAllConstat().subscribe((data) => this.listConstat = data);
        });
    }
    openDashboard() {
        console.log("open dashboard");
    }
    openConstatList() {
        console.log("open constat list");
    }
    logoutAction() {
        this.serviceAuth.logout();
    }
    openConstatDetails(id) {
        this.router.navigateByUrl("/constatdetail/" + id);
    }
    configureAccount() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Please enter your info',
                buttons: [{
                        text: 'Confirm',
                        handler: data => {
                            this.user.firstname = data[0];
                            this.user.lastname = data[1];
                            this.user.username = data[2];
                            this.user.email = data[3];
                            console.log(this.user);
                            this.serviceUser.updateuser(this.user).subscribe((data) => {
                                console.log(data);
                            });
                        }
                    }],
                inputs: [
                    {
                        placeholder: 'Firstname',
                        value: this.user.firstname
                    },
                    {
                        placeholder: 'Lastname',
                        value: this.user.lastname
                    },
                    {
                        placeholder: 'Username',
                        value: this.user.username
                    },
                    {
                        placeholder: 'Email',
                        value: this.user.email
                    },
                ],
            });
            yield alert.present();
        });
    }
    searchConstat() {
        console.log(this.search);
        if (this.search != "") {
            this.listConstat = this.listConstat.filter(res => {
                if (res.accidentSite.toLocaleLowerCase().match(this.search.toLocaleLowerCase())) {
                    return true;
                }
                else {
                    return false;
                }
            });
        }
        else {
            this.serviceConstat.getAllConstat().subscribe((data) => this.listConstat = data);
        }
    }
};
AdminPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: _services_constat_service__WEBPACK_IMPORTED_MODULE_4__.ConstatService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
AdminPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-admin',
        template: _admin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_admin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdminPage);



/***/ }),

/***/ 737:
/*!*********************************************!*\
  !*** ./src/app/services/constat.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConstatService": () => (/* binding */ ConstatService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



let ConstatService = class ConstatService {
    //host:string ="http://localhost:8081/constat";
    constructor(http) {
        this.http = http;
        this.host = "http://192.168.1.4:8081/constat";
    }
    sendEmail(to, id) {
        return this.http.get(this.host + "/sendConstatdetailsEmail/" + to + "/" + id);
    }
    addConstat(c) {
        return this.http.post(this.host + "/saveconstat", c);
    }
    getAllConstat() {
        return this.http.get(this.host + "/getallconstats");
    }
    getLastIdVehiculeInformation() {
        return this.http.get(this.host + "/getLastIdVehiculeInformation");
    }
    saveVehiculeInforamtion(vehiculeInforamtion) {
        return this.http.post(this.host + "/saveVehiculeInforamtion", vehiculeInforamtion);
    }
    saveConstatWithVehiculeInformationA(constat, id) {
        return this.http.post(this.host + "/saveConstatWithVehiculeInformationA/" + id, constat);
    }
    deleteConstatById(id) {
        return this.http.delete(this.host + "/deleteconstat/" + id);
    }
    getSizeOfConstatByAccidentSite(site) {
        return this.http.get(this.host + "/getSizeOfConstatByAccidentSite/" + site);
    }
    getConstatByid(id) {
        return this.http.get(this.host + "/getconstat/" + id);
    }
};
ConstatService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
ConstatService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ConstatService);



/***/ }),

/***/ 9991:
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ng2SearchPipe": () => (/* binding */ Ng2SearchPipe),
/* harmony export */   "Ng2SearchPipeModule": () => (/* binding */ Ng2SearchPipeModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



class Ng2SearchPipe {
  /**
   * @param {?} items object from array
   * @param {?} term term's search
   * @return {?}
   */
  transform(items, term) {
    if (!term || !items) return items;
    return Ng2SearchPipe.filter(items, term);
  }
  /**
   *
   * @param {?} items List of items to filter
   * @param {?} term  a string term to compare with every property of the list
   *
   * @return {?}
   */


  static filter(items, term) {
    const
    /** @type {?} */
    toCompare = term.toLowerCase();
    /**
     * @param {?} item
     * @param {?} term
     * @return {?}
     */

    function checkInside(item, term) {
      for (let
      /** @type {?} */
      property in item) {
        if (item[property] === null || item[property] == undefined) {
          continue;
        }

        if (typeof item[property] === 'object') {
          if (checkInside(item[property], term)) {
            return true;
          }
        }

        if (item[property].toString().toLowerCase().includes(toCompare)) {
          return true;
        }
      }

      return false;
    }

    return items.filter(function (item) {
      return checkInside(item, term);
    });
  }

}

Ng2SearchPipe.ɵfac = function Ng2SearchPipe_Factory(t) {
  return new (t || Ng2SearchPipe)();
};

Ng2SearchPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "filter",
  type: Ng2SearchPipe,
  pure: false
});
Ng2SearchPipe.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: Ng2SearchPipe,
  factory: Ng2SearchPipe.ɵfac
});
/**
 * @nocollapse
 */

Ng2SearchPipe.ctorParameters = () => [];

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'filter',
      pure: false
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

class Ng2SearchPipeModule {}

Ng2SearchPipeModule.ɵfac = function Ng2SearchPipeModule_Factory(t) {
  return new (t || Ng2SearchPipeModule)();
};

Ng2SearchPipeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: Ng2SearchPipeModule
});
Ng2SearchPipeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
/**
 * @nocollapse
 */

Ng2SearchPipeModule.ctorParameters = () => [];

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipeModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [Ng2SearchPipe],
      exports: [Ng2SearchPipe]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Ng2SearchPipeModule, {
    declarations: [Ng2SearchPipe],
    exports: [Ng2SearchPipe]
  });
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 1162:
/*!**************************************************!*\
  !*** ./src/app/admin/admin.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "ion-menu::part(backdrop) {\n  background-color: rgba(0, 57, 213, 0.5);\n}\n\nion-menu::part(container) {\n  border-radius: 0 20px 20px 0;\n  box-shadow: 4px 0px 16px rgba(159, 164, 255, 0.18);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVDQUFBO0FBQ0o7O0FBRUU7RUFDRSw0QkFBQTtFQUVBLGtEQUFBO0FBQUoiLCJmaWxlIjoiYWRtaW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnU6OnBhcnQoYmFja2Ryb3ApIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgNTcsIDIxMywgMC41KTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnU6OnBhcnQoY29udGFpbmVyKSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDIwcHggMjBweCAwO1xyXG4gIFxyXG4gICAgYm94LXNoYWRvdzogNHB4IDBweCAxNnB4IHJnYmEoMTU5LCAxNjQsIDI1NSwgMC4xOCk7XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 376:
/*!**************************************************!*\
  !*** ./src/app/admin/admin.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-app>\n  <ion-menu side=\"start\" contentId=\"main-content\">\n    <ion-header>\n      <ion-toolbar color=\"tertiary\">\n        <ion-title>Menu Content</ion-title>\n        \n      </ion-toolbar>\n      \n    </ion-header>\n    <ion-content class=\"ion-padding\">\n      \n      <ion-list lines=\"none\">\n\t\t\t\t<ion-menu-toggle auto-hide=\"false\">\n\t\t\t\t\t<ion-item detail=\"false\" [routerDirection]=\"'root'\" routerLink=\"/dashboard\">\n\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t<ion-text color=\"primary\">\n\t\t\t\t\t\t\t\tDashboard\n\t\t\t\t\t\t\t</ion-text>\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-menu-toggle>\n        <ion-menu-toggle auto-hide=\"false\">\n\t\t\t\t\t<ion-item detail=\"false\" [routerDirection]=\"'root'\" routerLink=\"/admin\">\n\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t<ion-text color=\"primary\">\n\t\t\t\t\t\t\t\tListe constat\n\t\t\t\t\t\t\t</ion-text>\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-menu-toggle>\n\t\t\t</ion-list>\n    </ion-content>\n  </ion-menu>\n  <div class=\"ion-page\" id=\"main-content\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-item>\n          <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n          <div slot=\"end\" style=\"display: flex;\" (click)=\"configureAccount()\">\n          <ion-icon name=\"person\" ></ion-icon>\n          <ion-label >{{username}}</ion-label>\n        </div>\n          <ion-button (click)=\"logoutAction()\" slot=\"end\">Log Out</ion-button>\n        </ion-item>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content class=\"ion-padding\">\n      <ion-searchbar showCancelButton=\"focus\" [(ngModel)]=\"search\" animated=\"true\" placeholder=\"search ...\"></ion-searchbar>\n      <div *ngFor=\"let constat of listConstat |filter:search\">\n        <ion-card >\n          <div (click)=\"openConstatDetails(constat.id)\">\n          <img alt=\"Constat sketch\" src='{{constat.sketch}}' />\n          <ion-card-header>\n            <ion-card-title>{{constat.accidentSite}}</ion-card-title>\n            <ion-card-subtitle>{{constat.accidentDate}}</ion-card-subtitle>\n          </ion-card-header>\n        \n          <ion-card-content>\n            Here's a small text description for the card content. Nothing more, nothing less.\n          </ion-card-content>\n        </div>\n          <ion-button (click)=\"deleteConstat(constat.id)\">Delete</ion-button>\n        </ion-card>\n      </div>\n    </ion-content>\n  </div>\n</ion-app>\n  \n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_admin_admin_module_ts.js.map