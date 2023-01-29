"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 2580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 2580);








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 6923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 3852);
/* harmony import */ var _tab1_page_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.css?ngResource */ 4223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _model_constat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/constat */ 6139);
/* harmony import */ var _model_vehicule_information__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/vehicule-information */ 5487);
/* harmony import */ var _model_insurance_company_information__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/insurance-company-information */ 795);
/* harmony import */ var _model_witness__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/witness */ 3052);
/* harmony import */ var _model_driver_information__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/driver-information */ 9090);
/* harmony import */ var _model_insured_inforamation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/insured-inforamation */ 9246);
/* harmony import */ var _model_vehicule__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/vehicule */ 3004);
/* harmony import */ var _services_constat_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/constat.service */ 737);
/* harmony import */ var signature_pad__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! signature_pad */ 1032);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../model/user */ 1612);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/user.service */ 3071);



















let Tab1Page = class Tab1Page {
    constructor(router, alertController, serviceUser, serviceConstat, serviceAuth) {
        this.router = router;
        this.alertController = alertController;
        this.serviceUser = serviceUser;
        this.serviceConstat = serviceConstat;
        this.serviceAuth = serviceAuth;
        this.isBeginning = true;
        this.isEnding = false;
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_11__.User(); //** */
        this.username = localStorage.getItem('username'); //** */
        this.circumstances = ['EN_STATIONNEMENT', 'QUITTAI_UN_STATIONNEMENT'];
        this.message = 'Vous pouvez ajouter un témoin en cliquant sur ce bouton.';
        this.witnesses = [];
        this.currentSlideIndex = 0;
        this.slide1 = ['Accident', 'Compagnie Assurance A', 'Conducteur A', 'Assuré A'];
        this.slide2 = ['Damage A', 'Compagnie Assurance B', 'Conducteur B', 'Assuré B'];
        this.slide3 = ['Damage B', 'Validation'];
        this.slidesOpts = {
            allowTouchMove: false,
            autoHeight: true,
        };
    }
    //** */
    logoutAction() {
        this.serviceAuth.logout();
    }
    //** */
    buildSlides() {
        const slides1 = ['Accident', 'Compagnie Assurance A', 'Conducteur A', 'Assuré A', 'Damage A', 'Compagnie Assurance B', 'Conducteur B', 'Assuré B', 'Damage B', 'Validation'];
        this.currentSlide = this.slide1[0];
        this.slides = this.slide1;
        this.slides1 = slides1;
    }
    ngOnInit() {
        this.serviceUser.getuser(this.username).subscribe((data) => this.user = data); //** */
        this.currentSlideIndex = 0;
        this.buildSlides();
        this.constat = new _model_constat__WEBPACK_IMPORTED_MODULE_2__.Constat();
        this.witness = new _model_witness__WEBPACK_IMPORTED_MODULE_5__.Witness();
        this.constat.vehiculeInformationA = new _model_vehicule_information__WEBPACK_IMPORTED_MODULE_3__.VehiculeInformation();
        this.constat.vehiculeInformationB = new _model_vehicule_information__WEBPACK_IMPORTED_MODULE_3__.VehiculeInformation();
        this.constat.vehiculeInformationA.insurenceCompanyInformation = new _model_insurance_company_information__WEBPACK_IMPORTED_MODULE_4__.InsurenceCompanyInformation();
        this.constat.vehiculeInformationB.insurenceCompanyInformation = new _model_insurance_company_information__WEBPACK_IMPORTED_MODULE_4__.InsurenceCompanyInformation();
        this.constat.vehiculeInformationA.driverInformation = new _model_driver_information__WEBPACK_IMPORTED_MODULE_6__.DriverInformation();
        this.constat.vehiculeInformationB.driverInformation = new _model_driver_information__WEBPACK_IMPORTED_MODULE_6__.DriverInformation();
        this.constat.vehiculeInformationA.insuredInforamation = new _model_insured_inforamation__WEBPACK_IMPORTED_MODULE_7__.InsuredInformation();
        this.constat.vehiculeInformationB.insuredInforamation = new _model_insured_inforamation__WEBPACK_IMPORTED_MODULE_7__.InsuredInformation();
        this.constat.vehiculeInformationA.vehicule = new _model_vehicule__WEBPACK_IMPORTED_MODULE_8__.Vehicule();
        this.constat.vehiculeInformationB.vehicule = new _model_vehicule__WEBPACK_IMPORTED_MODULE_8__.Vehicule();
    }
    cancel() {
        this.modal.dismiss(null, 'cancel');
    }
    confirm() {
        this.modal.dismiss(this.name, 'confirm');
    }
    cancel2() {
        this.modal2.dismiss(null, 'cancel');
    }
    confirm2() {
        this.modal2.dismiss(this.name, 'confirm');
    }
    onHurtPeopleOn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            if (this.constat.hurtPeople === true) {
                const alert = yield this.alertController.create({
                    header: 'Alert',
                    subHeader: 'Important message',
                    message: 'If people are injured please call the police 197 or 196',
                    buttons: ['OK'],
                });
                yield alert.present();
            }
        });
    }
    onWillDismiss(event) {
        const ev = event;
        if (ev.detail.role === 'confirm') {
            this.message = `Hello, ${ev.detail.data}!`;
        }
    }
    onWillDismiss2(event) {
        const ev = event;
        if (ev.detail.role === 'confirm') {
            this.message = `Hello, ${ev.detail.data}!`;
        }
    }
    onBack() {
        this.currentSlideIndex--;
        if (this.currentSlideIndex <= 3) {
            this.slides = this.slide1;
        }
        if (this.currentSlideIndex > 3 && this.currentSlideIndex <= 7) {
            this.slides = this.slide2;
        }
        if (this.currentSlideIndex > 7) {
            this.slides = this.slide3;
        }
        this.ionSlides.slidePrev();
        this.content.scrollToTop();
    }
    onNext() {
        this.currentSlideIndex++;
        if (this.currentSlideIndex <= 3) {
            this.slides = this.slide1;
        }
        if (this.currentSlideIndex > 3 && this.currentSlideIndex <= 7) {
            this.slides = this.slide2;
        }
        if (this.currentSlideIndex > 7) {
            this.slides = this.slide3;
        }
        this.ionSlides.slideNext();
        this.content.scrollToTop();
    }
    onSlideDidChange() {
        this.content.scrollToTop();
    }
    onSlideWillChange() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            const index = yield this.ionSlides.getActiveIndex();
            console.log(index);
            this.currentSlide = this.slides1[index];
            this.isBeginning = yield this.ionSlides.isBeginning();
            this.isEnding = yield this.ionSlides.isEnd();
        });
    }
    addConstat() {
        //console.log(JSON.stringify(this.constat));
        this.serviceConstat.addConstat(this.constat).subscribe((data) => {
            console.log(data);
            this.router.navigateByUrl("/constatdetail/" + data);
        });
    }
    ngAfterViewInit() {
        this.signaturePad = new signature_pad__WEBPACK_IMPORTED_MODULE_10__["default"](this.canvasEl.nativeElement);
        this.signaturePad1 = new signature_pad__WEBPACK_IMPORTED_MODULE_10__["default"](this.canvasEl1.nativeElement);
        this.signaturePad2 = new signature_pad__WEBPACK_IMPORTED_MODULE_10__["default"](this.canvasEl2.nativeElement);
    }
    startDrawing(event) {
        console.log(event);
        // works in device not in browser
    }
    moved(event) {
        // works in device not in browser
    }
    clearPad() {
        this.signaturePad.clear();
    }
    savePad() {
        const base64Data = this.signaturePad.toDataURL();
        this.signatureImg = base64Data;
        this.constat.sketch = this.signatureImg;
    }
    startDrawingSignatureA(event) {
        console.log(event);
        // works in device not in browser
    }
    movedSignatureA(event) {
        // works in device not in browser
    }
    clearPadSignatureA() {
        this.signaturePad1.clear();
    }
    savePadSignatureA() {
        const base64Data = this.signaturePad1.toDataURL();
        this.signatureImg1 = base64Data;
        this.constat.vehiculeInformationA.signature = this.signatureImg1;
    }
    startDrawingSignatureB(event) {
        console.log(event);
        // works in device not in browser
    }
    movedSignatureB(event) {
        // works in device not in browser
    }
    clearPadSignatureB() {
        this.signaturePad2.clear();
    }
    savePadSignatureB() {
        const base64Data = this.signaturePad2.toDataURL();
        this.signatureImg2 = base64Data;
        this.constat.vehiculeInformationB.signature = this.signatureImg2;
    }
    //** */
    configureAccount() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Veuillez entrer vos renseignements',
                buttons: [{
                        text: 'Confirmer',
                        handler: data => {
                            this.user.firstname = data[0];
                            this.user.lastname = data[1];
                            this.user.username = data[2];
                            this.user.email = data[3];
                            console.log(this.user);
                            this.serviceUser.updateuser(this.user).subscribe((data) => {
                                console.log(data);
                                this.serviceAuth.logout();
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
            // 
            yield alert.present();
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.AlertController },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_13__.UserService },
    { type: _services_constat_service__WEBPACK_IMPORTED_MODULE_9__.ConstatService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_12__.AuthService }
];
Tab1Page.propDecorators = {
    modal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonModal,] }],
    modal2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonModal,] }],
    ionSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonSlides, { static: false },] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonContent,] }],
    canvasEl2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild, args: ['canvas2',] }],
    canvasEl1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild, args: ['canvas1',] }],
    canvasEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild, args: ['canvas',] }]
};
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-tab1',
        template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab1_page_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 4223:
/*!***********************************************!*\
  !*** ./src/app/tab1/tab1.page.css?ngResource ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "ion-content {\r\n  width: 100%;\r\n  align-items: center;\r\n  justify-content: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n \r\n}\r\n.container {\r\n  margin-top: 20px;\r\n  width: 90%;\r\n  margin-left: 5%;\r\n}\r\n.steps{\r\n\r\n  align-items: flex-start;\r\n}\r\n.step-title{\r\n  text-align: center;\r\n  margin-top: 10px;\r\n}\r\ncanvas {\r\n  display: block;\r\n  border: 1px solid rgb(255, 255, 255);\r\n  background-color: var(--ion-color-success);\r\n  width: 100%;\r\n}\r\n.scan-box{\r\nborder: 2px solid #fff;\r\nbox-shadow: 0 0 0 100vmax rgba(0,0,0,0.5);\r\ncontent: '';\r\ndisplay: block;\r\nleft:50%;\r\nheight:300px;\r\nposition: absolute;\r\ntop:50%;\r\ntransform: translate(-50%,-50%);\r\nwidth: 300px;\r\n}\r\n@media only screen and (max-width: 420px){\r\n  .test{\r\n    display: inline !important;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isc0JBQXNCOztBQUV4QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixlQUFlO0FBQ2pCO0FBQ0E7O0VBRUUsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0NBQW9DO0VBQ3BDLDBDQUEwQztFQUMxQyxXQUFXO0FBQ2I7QUFHQTtBQUNBLHNCQUFzQjtBQUN0Qix5Q0FBeUM7QUFDekMsV0FBVztBQUNYLGNBQWM7QUFDZCxRQUFRO0FBQ1IsWUFBWTtBQUNaLGtCQUFrQjtBQUNsQixPQUFPO0FBQ1AsK0JBQStCO0FBQy9CLFlBQVk7QUFDWjtBQUNBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRiIsImZpbGUiOiJ0YWIxLnBhZ2UuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gXHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxufVxyXG4uc3RlcHN7XHJcblxyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcbi5zdGVwLXRpdGxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5jYW52YXMge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4uc2Nhbi1ib3h7XHJcbmJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbmJveC1zaGFkb3c6IDAgMCAwIDEwMHZtYXggcmdiYSgwLDAsMCwwLjUpO1xyXG5jb250ZW50OiAnJztcclxuZGlzcGxheTogYmxvY2s7XHJcbmxlZnQ6NTAlO1xyXG5oZWlnaHQ6MzAwcHg7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxudG9wOjUwJTtcclxudHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxud2lkdGg6IDMwMHB4O1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpe1xyXG4gIC50ZXN0e1xyXG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59Il19 */";

/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "  <ion-header style=\"padding: 10px 0px; background-color: white !important;\">\n    <ion-toolbar >\n      <ion-item>\n        <ion-button  slot=\"start\" [routerLink]=\"['/welcome']\">Retour</ion-button>\n        <div slot=\"end\" style=\"display: flex;\" class=\"test\" >\n        <ion-icon  name=\"person\" style=\"margin-right: 2px;\" ></ion-icon>\n        <ion-label (click)=\"configureAccount()\" >{{username}}</ion-label>\n        <ion-button color=\"danger\" (click)=\"logoutAction()\" >Déconnexion</ion-button>\n\n        </div>\n        \n      </ion-item>\n    </ion-toolbar>\n  </ion-header>\n\n\n\n<ion-content>\n  <div class=\"container\">\n\n    <div class=\"flex steps justify-content-space-between ion-margin-top relative\">\n      \n      <div class=\"flex flex-column justify-content-center full-width\" style=\" flex-direction: column; display: flex; align-items: center;\"\n      *ngFor=\"let slide of slides; let index = index; let first = first; let last = last;\">\n     \n\n        <div \n        class=\"flex flex-column align-items-center justify-content-center bold text-medium \"\n        style=\"width: 30px; height: 30px; border-radius: 15px;\"\n        [style.background]=\"slide === currentSlide ? 'var(--ion-color-primary)':'var(--ion-color-light-shade)'\"\n        [style.color]=\"slide === currentSlide ? 'var(--ion-color-light)':'var(--ion-color-dark)'\"\n       >\n        {{ index + 1 }}\n    </div>\n      <div [style.color]=\"slide === currentSlide ? 'var(--ion-color-primary)':'var(--ion-color-medium)'\"\n     \n      class=\"step-title\">\n      {{ slide }}\n  </div>\n    \n</div>\n</div>\n\n<ion-slides [options]=\"slidesOpts\"  (ionSlideDidChange)=\"onSlideDidChange()\" (ionSlideWillChange)=\"onSlideWillChange()\">\n  <ng-container *ngFor=\"let slide of slides1\">\n    <ion-slide >\n      <div style=\"width: 100%;\" *ngIf=\"slide==='Accident'\">\n        \n            <ion-item>\n              <ion-label position=\"floating\">Lieu d'accident</ion-label>\n              <ion-input placeholder=\"Enter Accident Site\" [(ngModel)]=\"constat.accidentSite\" #test=\"ngModel\" required minlength=\"3\"></ion-input>\n            </ion-item>\n              <ion-text color=\"danger\" *ngIf=\"test.invalid && (test.dirty || test.touched)\">\n                <span class=\"text-tiny\">\n                  Field required\n                </span>\n              </ion-text>\n          \n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label>Blessé(s)</ion-label>\n                <ion-toggle slot=\"end\" [(ngModel)]=\"constat.hurtPeople\" (ngModelChange)=\"onHurtPeopleOn()\"></ion-toggle>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label>Dégats matériels </ion-label>\n                <ion-toggle slot=\"end\" [(ngModel)]=\"constat.materialDamageOtherThenAorB\"></ion-toggle>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          \n        </div>\n        <div *ngIf=\"slide==='Compagnie Assurance A'\">\n          <ion-button id=\"open-modal\" expand=\"block\">Témoins</ion-button>\n          <p>{{ message }}</p>\n          <ion-modal trigger=\"open-modal\" (willDismiss)=\"onWillDismiss($event)\">\n            <ng-template>\n              <ion-header>\n                <ion-toolbar>\n                  <ion-buttons slot=\"start\">\n                    <ion-button (click)=\"cancel()\">Cancel</ion-button>\n                  </ion-buttons>\n                  <ion-title>Bienvenue</ion-title>\n                  <ion-buttons slot=\"end\">\n                    <ion-button (click)=\"confirm()\" [strong]=\"true\">Confirmer</ion-button>\n                  </ion-buttons>\n                </ion-toolbar>\n              </ion-header>\n              <ion-content class=\"ion-padding\">\n                <ion-item>\n                  <ion-label position=\"floating\">Prénom</ion-label>\n                  <ion-input placeholder=\"Enter witness First name\" [(ngModel)]=\"witness.firstname\"></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label position=\"floating\">Nom</ion-label>\n                  <ion-input placeholder=\"Enter witness Last name\" [(ngModel)]=\"witness.lastname\"></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label position=\"floating\">Email</ion-label>\n                  <ion-input placeholder=\"Enter witness Email\" [(ngModel)]=\"witness.email\"></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label position=\"floating\">Addresse</ion-label>\n                  <ion-input placeholder=\"Enter witness Address\" [(ngModel)]=\"witness.address\"></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label position=\"floating\">Numéro Téléphone </ion-label>\n                  <ion-input type=\"tel\" placeholder=\"+216 11 111 111\" [(ngModel)]=\"witness.phone\"></ion-input>\n                </ion-item>\n                <ion-item style=\"margin-top: 20px;\">\n                  <ion-label>Passager avec véhicule A</ion-label>\n                  <ion-toggle slot=\"end\" [(ngModel)]=\"witness.passenger\"></ion-toggle>\n                </ion-item>\n                <ion-item style=\"margin-top: 20px;\">\n                  <ion-label>Passager avec véhicule B</ion-label>\n                  <ion-toggle slot=\"end\"></ion-toggle>\n                </ion-item>\n              </ion-content>\n            </ng-template>\n          </ion-modal>\n          <h1>Société d'assurance</h1>\n          <ion-item>\n            <ion-label>date début</ion-label>\n            <ion-input\n              id=\"begingDate\"\n              class=\"ion-text-end\"\n            ></ion-input>\n            <ion-popover trigger=\"begingDate\" size=\"cover\" side=\"top\" alignment=\"start\" >\n              <ng-template>\n                <ion-datetime\n                  presentation=\"begingDate\"\n                  [(ngModel)]=\"constat.vehiculeInformationA.insurenceCompanyInformation.begingDate\"\n                  locale=\"sl-SI\" required \n                  ></ion-datetime>\n                </ng-template>\n              </ion-popover>\n            </ion-item>\n            <ion-item style=\"margin-top: 20px;\">\n            <ion-label>Date fin</ion-label>\n            <ion-input\n              id=\"endDate\"\n              class=\"ion-text-end\"\n              ></ion-input>\n              <ion-popover trigger=\"endDate\" side=\"top\" alignment=\"start\" size=\"cover\">\n              <ng-template>\n                <ion-datetime\n                presentation=\"endDate\"\n                [(ngModel)]=\"constat.vehiculeInformationA.insurenceCompanyInformation.endDate\"\n                locale=\"fr-FR\" required \n                ></ion-datetime>\n              </ng-template>\n            </ion-popover>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Véhicule assuré par</ion-label>\n            <ion-input placeholder=\"Enter Insurence Company Name\" [(ngModel)]=\"constat.vehiculeInformationA.insurenceCompanyInformation.insurenceCompanyName\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">contrat d'assurance numéro</ion-label>\n            <ion-input placeholder=\"Enter Insurance Contract Number\" [(ngModel)]=\"constat.vehiculeInformationA.insurenceCompanyInformation.insuranceContractNumber\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Agence</ion-label>\n            <ion-input placeholder=\"Enter Agency Name\" [(ngModel)]=\"constat.vehiculeInformationA.insurenceCompanyInformation.agencyName\"></ion-input>\n          </ion-item>\n          \n        </div>\n        <div *ngIf=\"slide==='Conducteur A'\">\n          <h1>Idéntité du conducteur</h1>\n          <ion-item>\n            <ion-label position=\"floating\">Prénom</ion-label>\n            <ion-input placeholder=\"Enter driver First name\" [(ngModel)]=\"constat.vehiculeInformationA.driverInformation.firstname\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Nom</ion-label>\n            <ion-input placeholder=\"Enter driver Last name\" [(ngModel)]=\"constat.vehiculeInformationA.driverInformation.lastname\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Permis du conduire numéro</ion-label>\n            <ion-input placeholder=\"Enter driver Licence Number\" [(ngModel)]=\"constat.vehiculeInformationA.driverInformation.licenceNumber\"></ion-input>\n          </ion-item>\n          <ion-item style=\"margin-top: 20px;\">\n            <ion-label>Délivrée le</ion-label>\n            <ion-input\n              id=\"licenceDate\"\n              class=\"ion-text-end\"\n            ></ion-input>\n            <ion-popover trigger=\"licenceDate\" size=\"cover\">\n              <ng-template>\n                <ion-datetime\n                presentation=\"licenceDate\"\n                  [(ngModel)]=\"constat.vehiculeInformationA.driverInformation.licenceDate\"\n                  locale=\"sl-SI\" required \n                  ></ion-datetime>\n                </ng-template>\n              </ion-popover>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Email</ion-label>\n            <ion-input placeholder=\"Enter driver Email\" [(ngModel)]=\"constat.vehiculeInformationA.driverInformation.email\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Addresse</ion-label>\n            <ion-input placeholder=\"Enter driver Address\" [(ngModel)]=\"constat.vehiculeInformationA.driverInformation.adress\"></ion-input>\n          </ion-item>\n         \n        </div>\n        <div style=\"width: 100%;\" *ngIf=\"slide==='Assuré A'\">\n          <h1>Assuré A</h1>\n          <ion-item>\n            <ion-label position=\"floating\">Prénom</ion-label>\n            <ion-input placeholder=\"Enter Insured First name\" [(ngModel)]=\"constat.vehiculeInformationA.insuredInforamation.firstname\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Nom</ion-label>\n            <ion-input placeholder=\"Enter Insured Last name\" [(ngModel)]=\"constat.vehiculeInformationA.insuredInforamation.lastname\"></ion-input>\n          </ion-item>\n          \n          <ion-item>\n            <ion-label position=\"floating\">Addresse</ion-label>\n            <ion-input placeholder=\"Enter Insured Address\" [(ngModel)]=\"constat.vehiculeInformationA.insuredInforamation.adress\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Téléphone numéro</ion-label>\n            <ion-input type=\"tel\" placeholder=\"+216 11 111 111\" [(ngModel)]=\"constat.vehiculeInformationA.insuredInforamation.phone\"></ion-input>\n          </ion-item>\n          <h1>Idénitié du voiture A</h1>\n          <ion-item>\n            <ion-label position=\"floating\">Marque</ion-label>\n            <ion-input placeholder=\"Enter vehicule brand\" [(ngModel)]=\"constat.vehiculeInformationA.vehicule.brand\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Type</ion-label>\n            <ion-input placeholder=\"Enter vehicule type\" [(ngModel)]=\"constat.vehiculeInformationA.vehicule.type\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Immatriculation</ion-label>\n            <ion-input placeholder=\"Enter vehicule plate\" [(ngModel)]=\"constat.vehiculeInformationA.vehicule.carPlate\"></ion-input>\n          </ion-item>\n          <ion-item style=\"margin-bottom: 20px;\">\n            <ion-label position=\"floating\">Direction</ion-label>\n            <ion-input placeholder=\"Enter vehicule direction coming from ... going to ...\" [(ngModel)]=\"constat.vehiculeInformationA.vehicule.direction\"></ion-input>\n          </ion-item>\n        </div>\n        <div *ngIf=\"slide==='Damage A'\">\n          <h1>Dégats apparanets voiture A</h1>\n          <ion-list>\n            <ion-radio-group [allowEmptySelection]=\"true\" value=\"chocs\" [(ngModel)]=\"constat.vehiculeInformationA.apperantDamage\">\n              <ion-item>\n                <ion-label>coté avant droit</ion-label>\n                <ion-radio slot=\"end\" value=\"pare à choc Ad\"></ion-radio>\n              </ion-item>\n              \n              <ion-item>\n                <ion-label> coté gauche</ion-label>\n                <ion-radio slot=\"end\" value=\"pare à choc Ag\"></ion-radio>\n              </ion-item>\n              \n              <ion-item>\n                <ion-label> choc avant</ion-label>\n                <ion-radio slot=\"end\" value=\"pare à choc AM\"></ion-radio>\n              </ion-item>\n          \n              <ion-item>\n                <ion-label>coté droit </ion-label>\n                <ion-radio slot=\"end\" value=\"cote droit avant\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Arrière Droit</ion-label>\n                <ion-radio slot=\"end\" value=\"cote droit arriére\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Arrière </ion-label>\n                <ion-radio slot=\"end\" value=\"cote arriére\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Arrière gauche </ion-label>\n                <ion-radio slot=\"end\" value=\"cote arrière gauche\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>coté gauche </ion-label>\n                <ion-radio slot=\"end\" value=\"cote gauche \"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n          </ion-list>\n          <ion-item>\n            <ion-label position=\"floating\">Observation</ion-label>\n            <ion-input placeholder=\"Enter Observation \" [(ngModel)]=\"constat.vehiculeInformationA.observation\"></ion-input>\n          </ion-item>\n          <img src=\"assets/icon/car choc.png\" alt=\"car choc\">\n\n        </div>\n        <div *ngIf=\"slide==='Compagnie Assurance B'\">\n          <ion-button id=\"open-modal2\" expand=\"block\">Ajouter un témoin</ion-button>\n          <p>{{ message }}</p>\n          <ion-modal trigger=\"open-modal2\" (willDismiss)=\"onWillDismiss2($event)\">\n            <ng-template>\n              <ion-header>\n                <ion-toolbar>\n                  <ion-buttons slot=\"start\">\n                    <ion-button (click)=\"cancel2()\">Annuler</ion-button>\n                  </ion-buttons>\n                  <ion-title>Welcome</ion-title>\n                  <ion-buttons slot=\"end\">\n                    <ion-button (click)=\"confirm2()\" [strong]=\"true\">Confirmer</ion-button>\n                  </ion-buttons>\n                </ion-toolbar>\n              </ion-header>\n              <ion-content class=\"ion-padding\">\n                <ion-grid>\n                  <ion-col>\n                <ion-item>\n                  <ion-label position=\"floating\">Prénom</ion-label>\n                  <ion-input placeholder=\"Enter witness First name\" [(ngModel)]=\"witness.firstname\"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col>\n                <ion-item>\n                  <ion-label position=\"floating\">Nom</ion-label>\n                  <ion-input placeholder=\"Enter witness Last name\" [(ngModel)]=\"witness.lastname\"></ion-input>\n                </ion-item></ion-col>\n                <ion-col>\n                <ion-item>\n                  <ion-label position=\"floating\">Email</ion-label>\n                  <ion-input placeholder=\"Enter witness Email\" [(ngModel)]=\"witness.email\"></ion-input>\n                </ion-item></ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-label position=\"floating\">Addresse</ion-label>\n                  <ion-input placeholder=\"Enter witness Address\" [(ngModel)]=\"witness.address\"></ion-input>\n                </ion-item></ion-col>\n                <ion-col>\n                <ion-item>\n                  <ion-label position=\"floating\">Téléphone numéro</ion-label>\n                  <ion-input type=\"tel\" placeholder=\"+216 11 111 111\" [(ngModel)]=\"witness.phone\"></ion-input>\n                </ion-item></ion-col>\n                <ion-col>\n                <ion-item>\n                  <ion-label>Passager avec véhicule A</ion-label>\n                  <ion-toggle slot=\"end\" [(ngModel)]=\"witness.passenger\"></ion-toggle>\n                </ion-item></ion-col>\n                <ion-col>\n                <ion-item>\n                  <ion-label>Passager avec véhicule B</ion-label>\n                  <ion-toggle slot=\"end\"></ion-toggle>\n                </ion-item></ion-col>\n              </ion-grid>\n              </ion-content>\n            </ng-template>\n          </ion-modal>\n          <h1>Société d'assurance</h1>\n          <ion-item>\n            <ion-label position=\"floating\">Véhicule assuré par</ion-label>\n            <ion-input placeholder=\"Enter Insurence Company Name\" [(ngModel)]=\"constat.vehiculeInformationB.insurenceCompanyInformation.insurenceCompanyName\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Numéro de contrat d'assurance</ion-label>\n            <ion-input placeholder=\"Enter Insurance Contract Number\" [(ngModel)]=\"constat.vehiculeInformationB.insurenceCompanyInformation.insuranceContractNumber\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Agence</ion-label>\n            <ion-input placeholder=\"Enter Agency Name\" [(ngModel)]=\"constat.vehiculeInformationB.insurenceCompanyInformation.agencyName\"></ion-input>\n          </ion-item>\n          <ion-item style=\"margin-top: 20px;\">\n            <ion-label>Date début</ion-label>\n            <ion-input\n              id=\"begingDateb\"\n              class=\"ion-text-end\"\n              ></ion-input>\n              <ion-popover trigger=\"begingDateb\" size=\"cover\">\n                <ng-template>\n                <ion-datetime\n                presentation=\"begingDateb\"\n                  [(ngModel)]=\"constat.vehiculeInformationB.insurenceCompanyInformation.begingDate\"\n                  locale=\"sl-SI\" required \n                ></ion-datetime>\n              </ng-template>\n            </ion-popover>\n          </ion-item>\n          <ion-item style=\"margin-top: 20px;\">\n            <ion-label>Date fin</ion-label>\n            <ion-input \n            id=\"endDateb\"\n            class=\"ion-text-end\"\n            ></ion-input>\n            <ion-popover size=\"cover\" side=\"top\" alignment=\"center\" style=\"--offset-y:-80px;\" trigger=\"endDateb\" >\n              <ng-template>\n                <ion-datetime \n                  presentation=\"endDateb\"\n                  [(ngModel)]=\"constat.vehiculeInformationB.insurenceCompanyInformation.endDate\"\n                  locale=\"sl-SI\" required \n                ></ion-datetime>\n              </ng-template>\n            </ion-popover>\n          </ion-item>\n        </div>\n        <div *ngIf=\"slide==='Conducteur B'\">\n          <h1>Identité du conducteur B</h1>\n          <ion-item>\n            <ion-label position=\"floating\">Prénom</ion-label>\n            <ion-input placeholder=\"Enter driver First name\" [(ngModel)]=\"constat.vehiculeInformationB.driverInformation.firstname\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Nom</ion-label>\n            <ion-input placeholder=\"Enter driver Last name\" [(ngModel)]=\"constat.vehiculeInformationB.driverInformation.lastname\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Email</ion-label>\n            <ion-input placeholder=\"Enter driver Email\" [(ngModel)]=\"constat.vehiculeInformationB.driverInformation.email\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Addresse</ion-label>\n            <ion-input placeholder=\"Enter driver Address\" [(ngModel)]=\"constat.vehiculeInformationB.driverInformation.adress\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Permis de conduire numéro</ion-label>\n            <ion-input placeholder=\"Enter driver Licence Number\" [(ngModel)]=\"constat.vehiculeInformationB.driverInformation.licenceNumber\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Délivrée le</ion-label>\n            <ion-input\n              id=\"licenceDateb\"\n              class=\"ion-text-end\"\n            ></ion-input>\n            <ion-popover trigger=\"licenceDateb\" size=\"cover\">\n              <ng-template>\n                <ion-datetime\n                  presentation=\"licenceDateb\"\n                  [(ngModel)]=\"constat.vehiculeInformationB.driverInformation.licenceDate\"\n                  locale=\"sl-SI\" required \n                  ></ion-datetime>\n                </ng-template>\n              </ion-popover>\n            </ion-item>\n        </div>\n        <div style=\"width: 100%;\" *ngIf=\"slide==='Assuré B'\">\n          <h1>Assuré B</h1>\n          <ion-item>\n            <ion-label position=\"floating\">Prénom</ion-label>\n            <ion-input placeholder=\"Enter Insured First name\" [(ngModel)]=\"constat.vehiculeInformationB.insuredInforamation.firstname\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Nom</ion-label>\n            <ion-input placeholder=\"Enter Insured Last name\" [(ngModel)]=\"constat.vehiculeInformationB.insuredInforamation.lastname\"></ion-input>\n          </ion-item>\n          \n          <ion-item>\n            <ion-label position=\"floating\">Addresse</ion-label>\n            <ion-input placeholder=\"Enter Insured Address\" [(ngModel)]=\"constat.vehiculeInformationB.insuredInforamation.adress\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Téléphone numéro</ion-label>\n            <ion-input type=\"tel\" placeholder=\"+216 11 111 111\" [(ngModel)]=\"constat.vehiculeInformationB.insuredInforamation.phone\"></ion-input>\n          </ion-item>\n          <h1>Idéntité du véhicule B</h1>\n          <ion-item>\n            <ion-label position=\"floating\">Marque</ion-label>\n            <ion-input placeholder=\"Enter vehicule brand\" [(ngModel)]=\"constat.vehiculeInformationB.vehicule.brand\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Type</ion-label>\n            <ion-input placeholder=\"Enter vehicule type\" [(ngModel)]=\"constat.vehiculeInformationB.vehicule.type\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Immatriculation</ion-label>\n            <ion-input placeholder=\"Enter vehicule plate\" [(ngModel)]=\"constat.vehiculeInformationB.vehicule.carPlate\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Direction</ion-label>\n            <ion-input placeholder=\"Enter vehicule direction coming from ... going to ...\" [(ngModel)]=\"constat.vehiculeInformationB.vehicule.direction\"></ion-input>\n          </ion-item>\n        </div>\n        <div *ngIf=\"slide==='Damage B'\">\n          <h1>Dégats apparanets B</h1>\n          <ion-list>\n            <ion-radio-group [allowEmptySelection]=\"true\" value=\"turtles\" [(ngModel)]=\"constat.vehiculeInformationB.apperantDamage\">\n              <ion-item>\n                <ion-label>coté avant droit</ion-label>\n                <ion-radio slot=\"end\" value=\"pare à choc Ad\"></ion-radio>\n              </ion-item>\n              \n              <ion-item>\n                <ion-label> coté gauche</ion-label>\n                <ion-radio slot=\"end\" value=\"pare à choc Ag\"></ion-radio>\n              </ion-item>\n          \n              <ion-item>\n                <ion-label> choc avant</ion-label>\n                <ion-radio slot=\"end\" value=\"pare à choc AM\"></ion-radio>\n              </ion-item>\n          \n              <ion-item>\n                <ion-label>coté droit </ion-label>\n                <ion-radio slot=\"end\" value=\"cote droit avant\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Arrière Droit</ion-label>\n                <ion-radio slot=\"end\" value=\"cote droit avant\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Arrière </ion-label>\n                <ion-radio slot=\"end\" value=\"cote droit avant\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Arrière gauche </ion-label>\n                <ion-radio slot=\"end\" value=\"cote droit avant\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>coté gauche </ion-label>\n                <ion-radio slot=\"end\" value=\"cote droit avant\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n          </ion-list>\n          <ion-item>\n            <ion-label position=\"floating\">Observation</ion-label>\n            <ion-input placeholder=\"Enter Observation \" [(ngModel)]=\"constat.vehiculeInformationB.observation\"></ion-input>\n          </ion-item>\n          <img src=\"assets/icon/car choc.png\" alt=\"car choc\">\n\n        </div>\n        <div style=\"width: 100%;\" *ngIf=\"slide==='Validation'\">\n          <div>\n            <h2>Croquis de l'accident</h2>\n            <canvas #canvas (touchstart)=\"startDrawing($event)\" (touchmove)=\"moved($event)\"></canvas>\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-button color=\"danger\" (click)=\"clearPad()\">Clear</ion-button>\n                </ion-col>\n                <ion-col size=\"4\" offset=\"2\">\n                  <ion-button color=\"secondary\" (click)=\"savePad()\">Save</ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n          \n          <ion-item *ngFor=\"let cir of circumstances\">\n            <ion-checkbox slot=\"start\"></ion-checkbox>\n            <ion-label>{{cir}}</ion-label>\n          </ion-item>\n          \n          <div>\n            <h2>Signature A</h2>\n            <canvas #canvas1 (touchstart)=\"startDrawingSignatureA($event)\" (touchmove)=\"movedSignatureA($event)\"></canvas>\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-button color=\"danger\" (click)=\"clearPadSignatureA()\">Clear</ion-button>\n                </ion-col>\n                <ion-col size=\"4\" offset=\"2\">\n                  <ion-button color=\"secondary\" (click)=\"savePadSignatureA()\">Save</ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n          <div>\n            <h2>Signature B</h2>\n            <canvas #canvas2 (touchstart)=\"startDrawingSignatureB($event)\" (touchmove)=\"movedSignatureB($event)\"></canvas>\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-button color=\"danger\" (click)=\"clearPadSignatureB()\">Clear</ion-button>\n                </ion-col>\n                <ion-col size=\"4\" offset=\"2\">\n                  <ion-button color=\"secondary\" (click)=\"savePadSignatureB()\">Save</ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </div>\n      </ion-slide>\n    </ng-container>\n  </ion-slides>\n</div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <div class=\"full-width flex align-items-center justify-content-space-between\">\n      <div *ngIf=\"currentSlideIndex<=10 && currentSlideIndex>0\">\n        <ion-button  color=\"dark\" strong shape=\"round\" (click)=\"onBack()\">\n          <span>Retour</span>\n        </ion-button>\n      </div>\n      <div *ngIf=\"currentSlideIndex<10 && currentSlideIndex>=0\">\n        <ion-button color=\"primary\" strong shape=\"round\" (click)=\"onNext()\" slot=\"end\">\n          <span>Suivant</span>\n        </ion-button>\n      </div>\n    </div>\n    <div *ngIf=\"isEnding==true\">\n      <ion-button color=\"primary\" expand=\"block\" (click)=\"addConstat()\" strong shape=\"round\">\n        <span>Envoyer</span>\n      </ion-button>\n    </div>\n    \n  </ion-toolbar>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map