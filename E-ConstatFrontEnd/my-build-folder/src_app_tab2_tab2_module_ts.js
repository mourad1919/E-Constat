"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 3092:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 4608:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 3092);
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularx-qrcode */ 9876);









let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule,
            angularx_qrcode__WEBPACK_IMPORTED_MODULE_8__.QRCodeModule
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
    })
], Tab2PageModule);



/***/ }),

/***/ 442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page.html?ngResource */ 1748);
/* harmony import */ var _tab2_page_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.css?ngResource */ 3955);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _model_constat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/constat */ 6139);
/* harmony import */ var _model_vehicule_information__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/vehicule-information */ 5487);
/* harmony import */ var _model_insurance_company_information__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/insurance-company-information */ 795);
/* harmony import */ var _model_witness__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/witness */ 3052);
/* harmony import */ var _model_driver_information__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/driver-information */ 9090);
/* harmony import */ var _model_insured_inforamation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/insured-inforamation */ 9246);
/* harmony import */ var _model_vehicule__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/vehicule */ 3004);
/* harmony import */ var _services_constat_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/constat.service */ 737);
/* harmony import */ var _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @capacitor-community/barcode-scanner */ 8353);
/* harmony import */ var signature_pad__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! signature_pad */ 1032);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 2816);

















let Tab2Page = class Tab2Page {
    constructor(router, serviceConstat, alertController) {
        this.router = router;
        this.serviceConstat = serviceConstat;
        this.alertController = alertController;
        this.text = "Information sur les véhicules A";
        this.text2 = "Damage  A";
        this.text3 = "Compagnie Assurance A";
        this.text4 = "Conducteur A";
        this.text5 = "Assuré A";
        this.idvehiculeInformationA = -1;
        this.test = "test";
        this.isBeginning = true;
        this.isEnding = false;
        this.circumstances = ['EN_STATIONNEMENT', 'QUITTAI_UN_STATIONNEMENT'];
        this.message = 'Vous pouvez ajouter un témoin à tout moment en cliquant sur ce bouton';
        this.witnesses = [];
        this.vehiculeInforamtion = new _model_vehicule_information__WEBPACK_IMPORTED_MODULE_3__.VehiculeInformation();
        this.slidesOpts = {
            allowTouchMove: false,
            autoHeight: true,
        };
        this.isModalOpenQrCodeGenerator = false;
        this.content_visibility = '';
        /*****************Croquis */
        this.isSignature = false;
        this.isSignatureSaved = false;
    }
    buildSlides() {
        const slides = ['Accident', 'Compagnie Assurance', 'Conducteur', 'Assuré', 'Damage', 'Croquis', 'Signature'];
        this.currentSlide = slides[0];
        this.slides = slides;
    }
    ngOnInit() {
        this.content_visibility = 'show';
        this.buildSlides();
        this.constat = new _model_constat__WEBPACK_IMPORTED_MODULE_2__.Constat();
        this.witness = new _model_witness__WEBPACK_IMPORTED_MODULE_5__.Witness();
        this.constat.vehiculeInformationA = new _model_vehicule_information__WEBPACK_IMPORTED_MODULE_3__.VehiculeInformation();
        this.constat.vehiculeInformationB = new _model_vehicule_information__WEBPACK_IMPORTED_MODULE_3__.VehiculeInformation();
        this.vehiculeInforamtion.insurenceCompanyInformation = new _model_insurance_company_information__WEBPACK_IMPORTED_MODULE_4__.InsurenceCompanyInformation();
        this.vehiculeInforamtion.driverInformation = new _model_driver_information__WEBPACK_IMPORTED_MODULE_6__.DriverInformation();
        this.constat.vehiculeInformationB.driverInformation = new _model_driver_information__WEBPACK_IMPORTED_MODULE_6__.DriverInformation();
        this.vehiculeInforamtion.insuredInforamation = new _model_insured_inforamation__WEBPACK_IMPORTED_MODULE_7__.InsuredInformation();
        this.constat.vehiculeInformationB.insuredInforamation = new _model_insured_inforamation__WEBPACK_IMPORTED_MODULE_7__.InsuredInformation();
        this.vehiculeInforamtion.vehicule = new _model_vehicule__WEBPACK_IMPORTED_MODULE_8__.Vehicule();
        this.constat.vehiculeInformationB.vehicule = new _model_vehicule__WEBPACK_IMPORTED_MODULE_8__.Vehicule();
        this.serviceConstat.getLastIdVehiculeInformation().subscribe((resultat) => {
            this.lastid = resultat;
            console.log(resultat);
        });
    }
    cancel() {
        this.modal.dismiss(null, 'cancel');
    }
    confirm() {
        this.modal.dismiss(this.name, 'confirm');
    }
    onWillDismiss(event) {
        const ev = event;
        if (ev.detail.role === 'confirm') {
            this.message = `Hello, ${ev.detail.data}!`;
        }
    }
    onBack() {
        this.ionSlides.slidePrev();
        this.content.scrollToTop();
    }
    onNext() {
        this.ionSlides.slideNext();
        this.content.scrollToTop();
    }
    onSlideDidChange() {
        this.content.scrollToTop();
    }
    onSlideWillChange() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const index = yield this.ionSlides.getActiveIndex();
            this.currentSlide = this.slides[index];
            this.isBeginning = yield this.ionSlides.isBeginning();
            this.isEnding = yield this.ionSlides.isEnd();
        });
    }
    addConstat() {
        console.log(JSON.stringify(this.constat));
        this.serviceConstat.addConstat(this.constat).subscribe((data) => {
            console.log(this.constat);
            this.router.navigateByUrl("/constatdetail/" + data);
            console.log(this.constat.vehiculeInformationA.driverInformation.email);
            this.serviceConstat.sendEmail(this.constat.vehiculeInformationA.driverInformation.email, data).subscribe(() => {
            });
        });
    }
    setOpenQrCodeGenerator(isOpen) {
        if (this.isSignature === true && this.isSignatureSaved === true) {
            this.isModalOpenQrCodeGenerator = isOpen;
            this.test = (this.lastid + 1).toString();
            console.log(this.vehiculeInforamtion);
            this.serviceConstat.saveVehiculeInforamtion(this.vehiculeInforamtion).subscribe(() => {
                console.log("save vahicule information");
                console.log(this.vehiculeInforamtion);
            });
        }
        else {
            console.log("erreur");
        }
    }
    checkPermission() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            try {
                // check or request permission
                const status = yield _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_10__.BarcodeScanner.checkPermission({ force: true });
                if (status.granted) {
                    // the user granted permission
                    return true;
                }
                return false;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    startScan() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const permission = yield this.checkPermission();
                if (!permission) {
                    return;
                }
                yield _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_10__.BarcodeScanner.hideBackground();
                document.querySelector('body').classList.add('scanner-active');
                this.content_visibility = 'hidden';
                const result = yield _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_10__.BarcodeScanner.startScan();
                console.log(result);
                _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_10__.BarcodeScanner.showBackground();
                document.querySelector('body').classList.remove('scanner-active');
                this.content_visibility = '';
                if (result === null || result === void 0 ? void 0 : result.hasContent) {
                    this.scannedResult = result.content;
                    console.log(this.scannedResult);
                    this.idvehiculeInformationA = this.scannedResult;
                    console.log("***************************************");
                    this.text = "Information sur les véhicules B";
                    this.text2 = "Damage  B";
                    this.text3 = "Compagnie Assurance  B";
                    this.text4 = "Conducteur  B";
                    this.text5 = "Assuré  B";
                }
            }
            catch (e) {
                console.log(e);
                this.stopScan();
            }
        });
    }
    stopScan() {
        _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_10__.BarcodeScanner.showBackground();
        _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_10__.BarcodeScanner.stopScan();
        document.querySelector('body').classList.remove('scanner-active');
        this.content_visibility = '';
    }
    ngOnDestroy() {
        this.stopScan();
    }
    onHurtPeopleOn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
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
    ngAfterViewInit() {
        this.signaturePad2 = new signature_pad__WEBPACK_IMPORTED_MODULE_11__["default"](this.canvasEl2.nativeElement);
        this.signaturePad = new signature_pad__WEBPACK_IMPORTED_MODULE_11__["default"](this.canvasEl.nativeElement);
    }
    startDrawing(event) {
        console.log(event);
        this.isSignature = true;
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
        console.log(this.signatureImg);
        this.isSignatureSaved = true;
    }
    //*****************SIGNATURE */
    startDrawingSignature(event) {
        console.log(event);
        // works in device not in browser
    }
    movedSignature(event) {
        // works in device not in browser
    }
    clearPadSignature() {
        this.signaturePad2.clear();
    }
    savePadSignature() {
        const base64Data = this.signaturePad2.toDataURL();
        this.signatureImg2 = base64Data;
        this.vehiculeInforamtion.signature = this.signatureImg2;
        console.log(this.signatureImg2);
    }
    saveConstat() {
        this.constat.vehiculeInformationB = this.vehiculeInforamtion;
        this.constat.vehiculeInformationA = new _model_vehicule_information__WEBPACK_IMPORTED_MODULE_3__.VehiculeInformation();
        console.log(this.constat);
        this.serviceConstat.saveConstatWithVehiculeInformationA(this.constat, this.idvehiculeInformationA).subscribe((data) => {
            this.router.navigateByUrl("/constatdetail/" + data);
        });
    }
};
Tab2Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: _services_constat_service__WEBPACK_IMPORTED_MODULE_9__.ConstatService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.AlertController }
];
Tab2Page.propDecorators = {
    modal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonModal,] }],
    ionSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonSlides, { static: false },] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonContent,] }],
    canvasEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: ['canvas',] }],
    canvasEl2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: ['canvas2',] }]
};
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-tab2',
        template: _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab2_page_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab2Page);



/***/ }),

/***/ 1176:
/*!***********************************************************************************!*\
  !*** ./node_modules/@capacitor-community/barcode-scanner/dist/esm/definitions.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDirection": () => (/* binding */ CameraDirection),
/* harmony export */   "SupportedFormat": () => (/* binding */ SupportedFormat)
/* harmony export */ });
var SupportedFormat;

(function (SupportedFormat) {
  // BEGIN 1D Product

  /**
   * Android only, UPC_A is part of EAN_13 according to Apple docs
   */
  SupportedFormat["UPC_A"] = "UPC_A";
  SupportedFormat["UPC_E"] = "UPC_E";
  /**
   * Android only
   */

  SupportedFormat["UPC_EAN_EXTENSION"] = "UPC_EAN_EXTENSION";
  SupportedFormat["EAN_8"] = "EAN_8";
  SupportedFormat["EAN_13"] = "EAN_13"; // END 1D Product
  // BEGIN 1D Industrial

  SupportedFormat["CODE_39"] = "CODE_39";
  /**
   * iOS only
   */

  SupportedFormat["CODE_39_MOD_43"] = "CODE_39_MOD_43";
  SupportedFormat["CODE_93"] = "CODE_93";
  SupportedFormat["CODE_128"] = "CODE_128";
  /**
   * Android only
   */

  SupportedFormat["CODABAR"] = "CODABAR";
  SupportedFormat["ITF"] = "ITF";
  /**
   * iOS only
   */

  SupportedFormat["ITF_14"] = "ITF_14"; // END 1D Industrial
  // BEGIN 2D

  SupportedFormat["AZTEC"] = "AZTEC";
  SupportedFormat["DATA_MATRIX"] = "DATA_MATRIX";
  /**
   * Android only
   */

  SupportedFormat["MAXICODE"] = "MAXICODE";
  SupportedFormat["PDF_417"] = "PDF_417";
  SupportedFormat["QR_CODE"] = "QR_CODE";
  /**
   * Android only
   */

  SupportedFormat["RSS_14"] = "RSS_14";
  /**
   * Android only
   */

  SupportedFormat["RSS_EXPANDED"] = "RSS_EXPANDED"; // END 2D
})(SupportedFormat || (SupportedFormat = {}));

var CameraDirection;

(function (CameraDirection) {
  CameraDirection["FRONT"] = "front";
  CameraDirection["BACK"] = "back";
})(CameraDirection || (CameraDirection = {}));

/***/ }),

/***/ 8353:
/*!*****************************************************************************!*\
  !*** ./node_modules/@capacitor-community/barcode-scanner/dist/esm/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarcodeScanner": () => (/* binding */ BarcodeScanner),
/* harmony export */   "CameraDirection": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection),
/* harmony export */   "SupportedFormat": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.SupportedFormat)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 1176);

const BarcodeScanner = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('BarcodeScanner', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-community_barcode-scanner_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 2041)).then(m => new m.BarcodeScannerWeb())
});



/***/ }),

/***/ 5099:
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Capacitor": () => (/* binding */ Capacitor),
/* harmony export */   "CapacitorCookies": () => (/* binding */ CapacitorCookies),
/* harmony export */   "CapacitorException": () => (/* binding */ CapacitorException),
/* harmony export */   "CapacitorHttp": () => (/* binding */ CapacitorHttp),
/* harmony export */   "CapacitorPlatforms": () => (/* binding */ CapacitorPlatforms),
/* harmony export */   "ExceptionCode": () => (/* binding */ ExceptionCode),
/* harmony export */   "Plugins": () => (/* binding */ Plugins),
/* harmony export */   "WebPlugin": () => (/* binding */ WebPlugin),
/* harmony export */   "WebView": () => (/* binding */ WebView),
/* harmony export */   "addPlatform": () => (/* binding */ addPlatform),
/* harmony export */   "registerPlugin": () => (/* binding */ registerPlugin),
/* harmony export */   "registerWebPlugin": () => (/* binding */ registerWebPlugin),
/* harmony export */   "setPlatform": () => (/* binding */ setPlatform)
/* harmony export */ });
/* harmony import */ var C_Users_dell_Desktop_E_Constat_E_ConstatFrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);


/*! Capacitor: https://capacitorjs.com/ - MIT License */
const createCapacitorPlatforms = win => {
  const defaultPlatformMap = new Map();
  defaultPlatformMap.set('web', {
    name: 'web'
  });
  const capPlatforms = win.CapacitorPlatforms || {
    currentPlatform: {
      name: 'web'
    },
    platforms: defaultPlatformMap
  };

  const addPlatform = (name, platform) => {
    capPlatforms.platforms.set(name, platform);
  };

  const setPlatform = name => {
    if (capPlatforms.platforms.has(name)) {
      capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
    }
  };

  capPlatforms.addPlatform = addPlatform;
  capPlatforms.setPlatform = setPlatform;
  return capPlatforms;
};

const initPlatforms = win => win.CapacitorPlatforms = createCapacitorPlatforms(win);
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */


const CapacitorPlatforms = /*#__PURE__*/initPlatforms(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const addPlatform = CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const setPlatform = CapacitorPlatforms.setPlatform;

const legacyRegisterWebPlugin = (cap, webPlugin) => {
  var _a;

  const config = webPlugin.config;
  const Plugins = cap.Plugins;

  if (!config || !config.name) {
    // TODO: add link to upgrade guide
    throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
  } // TODO: add link to upgrade guide


  console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);

  if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
    // Add the web plugin into the plugins registry if there already isn't
    // an existing one. If it doesn't already exist, that means
    // there's no existing native implementation for it.
    // - OR -
    // If we already have a plugin registered (meaning it was defined in the native layer),
    // then we should only overwrite it if the corresponding web plugin activates on
    // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
    Plugins[config.name] = webPlugin;
  }
};

var ExceptionCode;

(function (ExceptionCode) {
  /**
   * API is not implemented.
   *
   * This usually means the API can't be used because it is not implemented for
   * the current platform.
   */
  ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
  /**
   * API is not available.
   *
   * This means the API can't be used right now because:
   *   - it is currently missing a prerequisite, such as network connectivity
   *   - it requires a particular platform or browser version
   */

  ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));

class CapacitorException extends Error {
  constructor(message, code, data) {
    super(message);
    this.message = message;
    this.code = code;
    this.data = data;
  }

}

const getPlatformId = win => {
  var _a, _b;

  if (win === null || win === void 0 ? void 0 : win.androidBridge) {
    return 'android';
  } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
    return 'ios';
  } else {
    return 'web';
  }
};

const createCapacitor = win => {
  var _a, _b, _c, _d, _e;

  const capCustomPlatform = win.CapacitorCustomPlatform || null;
  const cap = win.Capacitor || {};
  const Plugins = cap.Plugins = cap.Plugins || {};
  /**
   * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
   */

  const capPlatforms = win.CapacitorPlatforms;

  const defaultGetPlatform = () => {
    return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
  };

  const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;

  const defaultIsNativePlatform = () => getPlatform() !== 'web';

  const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;

  const defaultIsPluginAvailable = pluginName => {
    const plugin = registeredPlugins.get(pluginName);

    if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
      // JS implementation available for the current platform.
      return true;
    }

    if (getPluginHeader(pluginName)) {
      // Native implementation available.
      return true;
    }

    return false;
  };

  const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;

  const defaultGetPluginHeader = pluginName => {
    var _a;

    return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName);
  };

  const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;

  const handleError = err => win.console.error(err);

  const pluginMethodNoop = (_target, prop, pluginName) => {
    return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
  };

  const registeredPlugins = new Map();

  const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
    const registeredPlugin = registeredPlugins.get(pluginName);

    if (registeredPlugin) {
      console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
      return registeredPlugin.proxy;
    }

    const platform = getPlatform();
    const pluginHeader = getPluginHeader(pluginName);
    let jsImplementation;

    const loadPluginImplementation = /*#__PURE__*/function () {
      var _ref = (0,C_Users_dell_Desktop_E_Constat_E_ConstatFrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!jsImplementation && platform in jsImplementations) {
          jsImplementation = typeof jsImplementations[platform] === 'function' ? jsImplementation = yield jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
        } else if (capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations) {
          jsImplementation = typeof jsImplementations['web'] === 'function' ? jsImplementation = yield jsImplementations['web']() : jsImplementation = jsImplementations['web'];
        }

        return jsImplementation;
      });

      return function loadPluginImplementation() {
        return _ref.apply(this, arguments);
      };
    }();

    const createPluginMethod = (impl, prop) => {
      var _a, _b;

      if (pluginHeader) {
        const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);

        if (methodHeader) {
          if (methodHeader.rtype === 'promise') {
            return options => cap.nativePromise(pluginName, prop.toString(), options);
          } else {
            return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
          }
        } else if (impl) {
          return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
        }
      } else if (impl) {
        return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
      } else {
        throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
      }
    };

    const createPluginMethodWrapper = prop => {
      let remove;

      const wrapper = (...args) => {
        const p = loadPluginImplementation().then(impl => {
          const fn = createPluginMethod(impl, prop);

          if (fn) {
            const p = fn(...args);
            remove = p === null || p === void 0 ? void 0 : p.remove;
            return p;
          } else {
            throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
          }
        });

        if (prop === 'addListener') {
          p.remove = /*#__PURE__*/(0,C_Users_dell_Desktop_E_Constat_E_ConstatFrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return remove();
          });
        }

        return p;
      }; // Some flair ✨


      wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;

      Object.defineProperty(wrapper, 'name', {
        value: prop,
        writable: false,
        configurable: false
      });
      return wrapper;
    };

    const addListener = createPluginMethodWrapper('addListener');
    const removeListener = createPluginMethodWrapper('removeListener');

    const addListenerNative = (eventName, callback) => {
      const call = addListener({
        eventName
      }, callback);

      const remove = /*#__PURE__*/function () {
        var _ref3 = (0,C_Users_dell_Desktop_E_Constat_E_ConstatFrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const callbackId = yield call;
          removeListener({
            eventName,
            callbackId
          }, callback);
        });

        return function remove() {
          return _ref3.apply(this, arguments);
        };
      }();

      const p = new Promise(resolve => call.then(() => resolve({
        remove
      })));
      p.remove = /*#__PURE__*/(0,C_Users_dell_Desktop_E_Constat_E_ConstatFrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.warn(`Using addListener() without 'await' is deprecated.`);
        yield remove();
      });
      return p;
    };

    const proxy = new Proxy({}, {
      get(_, prop) {
        switch (prop) {
          // https://github.com/facebook/react/issues/20030
          case '$$typeof':
            return undefined;

          case 'toJSON':
            return () => ({});

          case 'addListener':
            return pluginHeader ? addListenerNative : addListener;

          case 'removeListener':
            return removeListener;

          default:
            return createPluginMethodWrapper(prop);
        }
      }

    });
    Plugins[pluginName] = proxy;
    registeredPlugins.set(pluginName, {
      name: pluginName,
      proxy,
      platforms: new Set([...Object.keys(jsImplementations), ...(pluginHeader ? [platform] : [])])
    });
    return proxy;
  };

  const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin; // Add in convertFileSrc for web, it will already be available in native context

  if (!cap.convertFileSrc) {
    cap.convertFileSrc = filePath => filePath;
  }

  cap.getPlatform = getPlatform;
  cap.handleError = handleError;
  cap.isNativePlatform = isNativePlatform;
  cap.isPluginAvailable = isPluginAvailable;
  cap.pluginMethodNoop = pluginMethodNoop;
  cap.registerPlugin = registerPlugin;
  cap.Exception = CapacitorException;
  cap.DEBUG = !!cap.DEBUG;
  cap.isLoggingEnabled = !!cap.isLoggingEnabled; // Deprecated props

  cap.platform = cap.getPlatform();
  cap.isNative = cap.isNativePlatform();
  return cap;
};

const initCapacitorGlobal = win => win.Capacitor = createCapacitor(win);

const Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
const registerPlugin = Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */

const Plugins = Capacitor.Plugins;
/**
 * Provided for backwards compatibility. Use the registerPlugin() API
 * instead, and provide the web plugin as the "web" implmenetation.
 * For example
 *
 * export const Example = registerPlugin('Example', {
 *   web: () => import('./web').then(m => new m.Example())
 * })
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */

const registerWebPlugin = plugin => legacyRegisterWebPlugin(Capacitor, plugin);
/**
 * Base class web plugins should extend.
 */


class WebPlugin {
  constructor(config) {
    this.listeners = {};
    this.windowListeners = {};

    if (config) {
      // TODO: add link to upgrade guide
      console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
      this.config = config;
    }
  }

  addListener(eventName, listenerFunc) {
    var _this = this;

    const listeners = this.listeners[eventName];

    if (!listeners) {
      this.listeners[eventName] = [];
    }

    this.listeners[eventName].push(listenerFunc); // If we haven't added a window listener for this event and it requires one,
    // go ahead and add it

    const windowListener = this.windowListeners[eventName];

    if (windowListener && !windowListener.registered) {
      this.addWindowListener(windowListener);
    }

    const remove = /*#__PURE__*/function () {
      var _ref5 = (0,C_Users_dell_Desktop_E_Constat_E_ConstatFrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return _this.removeListener(eventName, listenerFunc);
      });

      return function remove() {
        return _ref5.apply(this, arguments);
      };
    }();

    const p = Promise.resolve({
      remove
    });
    Object.defineProperty(p, 'remove', {
      value: function () {
        var _ref6 = (0,C_Users_dell_Desktop_E_Constat_E_ConstatFrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          console.warn(`Using addListener() without 'await' is deprecated.`);
          yield remove();
        });

        return function value() {
          return _ref6.apply(this, arguments);
        };
      }()
    });
    return p;
  }

  removeAllListeners() {
    var _this2 = this;

    return (0,C_Users_dell_Desktop_E_Constat_E_ConstatFrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.listeners = {};

      for (const listener in _this2.windowListeners) {
        _this2.removeWindowListener(_this2.windowListeners[listener]);
      }

      _this2.windowListeners = {};
    })();
  }

  notifyListeners(eventName, data) {
    const listeners = this.listeners[eventName];

    if (listeners) {
      listeners.forEach(listener => listener(data));
    }
  }

  hasListeners(eventName) {
    return !!this.listeners[eventName].length;
  }

  registerWindowListener(windowEventName, pluginEventName) {
    this.windowListeners[pluginEventName] = {
      registered: false,
      windowEventName,
      pluginEventName,
      handler: event => {
        this.notifyListeners(pluginEventName, event);
      }
    };
  }

  unimplemented(msg = 'not implemented') {
    return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
  }

  unavailable(msg = 'not available') {
    return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
  }

  removeListener(eventName, listenerFunc) {
    var _this3 = this;

    return (0,C_Users_dell_Desktop_E_Constat_E_ConstatFrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const listeners = _this3.listeners[eventName];

      if (!listeners) {
        return;
      }

      const index = listeners.indexOf(listenerFunc);

      _this3.listeners[eventName].splice(index, 1); // If there are no more listeners for this type of event,
      // remove the window listener


      if (!_this3.listeners[eventName].length) {
        _this3.removeWindowListener(_this3.windowListeners[eventName]);
      }
    })();
  }

  addWindowListener(handle) {
    window.addEventListener(handle.windowEventName, handle.handler);
    handle.registered = true;
  }

  removeWindowListener(handle) {
    if (!handle) {
      return;
    }

    window.removeEventListener(handle.windowEventName, handle.handler);
    handle.registered = false;
  }

}

const WebView = /*#__PURE__*/registerPlugin('WebView');
/******** END WEB VIEW PLUGIN ********/

/******** COOKIES PLUGIN ********/

/**
 * Safely web encode a string value (inspired by js-cookie)
 * @param str The string value to encode
 */

const encode = str => encodeURIComponent(str).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);

class CapacitorCookiesPluginWeb extends WebPlugin {
  setCookie(options) {
    return (0,C_Users_dell_Desktop_E_Constat_E_ConstatFrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Safely Encoded Key/Value
        const encodedKey = encode(options.key);
        const encodedValue = encode(options.value); // Clean & sanitize options

        const expires = `; expires=${(options.expires || '').replace('expires=', '')}`; // Default is "; expires="

        const path = (options.path || '/').replace('path=', ''); // Default is "path=/"

        document.cookie = `${encodedKey}=${encodedValue || ''}${expires}; path=${path}`;
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }

  deleteCookie(options) {
    return (0,C_Users_dell_Desktop_E_Constat_E_ConstatFrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        document.cookie = `${options.key}=; Max-Age=0`;
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }

  clearCookies() {
    return (0,C_Users_dell_Desktop_E_Constat_E_ConstatFrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const cookies = document.cookie.split(';') || [];

        for (const cookie of cookies) {
          document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }

  clearAllCookies() {
    var _this4 = this;

    return (0,C_Users_dell_Desktop_E_Constat_E_ConstatFrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this4.clearCookies();
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }

}

const CapacitorCookies = registerPlugin('CapacitorCookies', {
  web: () => new CapacitorCookiesPluginWeb()
}); // UTILITY FUNCTIONS

/**
 * Read in a Blob value and return it as a base64 string
 * @param blob The blob value to convert to a base64 string
 */

const readBlobAsBase64 = /*#__PURE__*/function () {
  var _ref7 = (0,C_Users_dell_Desktop_E_Constat_E_ConstatFrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const base64String = reader.result; // remove prefix "data:application/pdf;base64,"

        resolve(base64String.indexOf(',') >= 0 ? base64String.split(',')[1] : base64String);
      };

      reader.onerror = error => reject(error);

      reader.readAsDataURL(blob);
    });
  });

  return function readBlobAsBase64(_x) {
    return _ref7.apply(this, arguments);
  };
}();
/**
 * Normalize an HttpHeaders map by lowercasing all of the values
 * @param headers The HttpHeaders object to normalize
 */


const normalizeHttpHeaders = (headers = {}) => {
  const originalKeys = Object.keys(headers);
  const loweredKeys = Object.keys(headers).map(k => k.toLocaleLowerCase());
  const normalized = loweredKeys.reduce((acc, key, index) => {
    acc[key] = headers[originalKeys[index]];
    return acc;
  }, {});
  return normalized;
};
/**
 * Builds a string of url parameters that
 * @param params A map of url parameters
 * @param shouldEncode true if you should encodeURIComponent() the values (true by default)
 */


const buildUrlParams = (params, shouldEncode = true) => {
  if (!params) return null;
  const output = Object.entries(params).reduce((accumulator, entry) => {
    const [key, value] = entry;
    let encodedValue;
    let item;

    if (Array.isArray(value)) {
      item = '';
      value.forEach(str => {
        encodedValue = shouldEncode ? encodeURIComponent(str) : str;
        item += `${key}=${encodedValue}&`;
      }); // last character will always be "&" so slice it off

      item.slice(0, -1);
    } else {
      encodedValue = shouldEncode ? encodeURIComponent(value) : value;
      item = `${key}=${encodedValue}`;
    }

    return `${accumulator}&${item}`;
  }, ''); // Remove initial "&" from the reduce

  return output.substr(1);
};
/**
 * Build the RequestInit object based on the options passed into the initial request
 * @param options The Http plugin options
 * @param extra Any extra RequestInit values
 */


const buildRequestInit = (options, extra = {}) => {
  const output = Object.assign({
    method: options.method || 'GET',
    headers: options.headers
  }, extra); // Get the content-type

  const headers = normalizeHttpHeaders(options.headers);
  const type = headers['content-type'] || ''; // If body is already a string, then pass it through as-is.

  if (typeof options.data === 'string') {
    output.body = options.data;
  } // Build request initializers based off of content-type
  else if (type.includes('application/x-www-form-urlencoded')) {
    const params = new URLSearchParams();

    for (const [key, value] of Object.entries(options.data || {})) {
      params.set(key, value);
    }

    output.body = params.toString();
  } else if (type.includes('multipart/form-data')) {
    const form = new FormData();

    if (options.data instanceof FormData) {
      options.data.forEach((value, key) => {
        form.append(key, value);
      });
    } else {
      for (const key of Object.keys(options.data)) {
        form.append(key, options.data[key]);
      }
    }

    output.body = form;
    const headers = new Headers(output.headers);
    headers.delete('content-type'); // content-type will be set by `window.fetch` to includy boundary

    output.headers = headers;
  } else if (type.includes('application/json') || typeof options.data === 'object') {
    output.body = JSON.stringify(options.data);
  }

  return output;
}; // WEB IMPLEMENTATION


class CapacitorHttpPluginWeb extends WebPlugin {
  /**
   * Perform an Http request given a set of options
   * @param options Options to build the HTTP request
   */
  request(options) {
    return (0,C_Users_dell_Desktop_E_Constat_E_ConstatFrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const requestInit = buildRequestInit(options, options.webFetchExtra);
      const urlParams = buildUrlParams(options.params, options.shouldEncodeUrlParams);
      const url = urlParams ? `${options.url}?${urlParams}` : options.url;
      const response = yield fetch(url, requestInit);
      const contentType = response.headers.get('content-type') || ''; // Default to 'text' responseType so no parsing happens

      let {
        responseType = 'text'
      } = response.ok ? options : {}; // If the response content-type is json, force the response to be json

      if (contentType.includes('application/json')) {
        responseType = 'json';
      }

      let data;
      let blob;

      switch (responseType) {
        case 'arraybuffer':
        case 'blob':
          blob = yield response.blob();
          data = yield readBlobAsBase64(blob);
          break;

        case 'json':
          data = yield response.json();
          break;

        case 'document':
        case 'text':
        default:
          data = yield response.text();
      } // Convert fetch headers to Capacitor HttpHeaders


      const headers = {};
      response.headers.forEach((value, key) => {
        headers[key] = value;
      });
      return {
        data,
        headers,
        status: response.status,
        url: response.url
      };
    })();
  }
  /**
   * Perform an Http GET request given a set of options
   * @param options Options to build the HTTP request
   */


  get(options) {
    var _this5 = this;

    return (0,C_Users_dell_Desktop_E_Constat_E_ConstatFrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this5.request(Object.assign(Object.assign({}, options), {
        method: 'GET'
      }));
    })();
  }
  /**
   * Perform an Http POST request given a set of options
   * @param options Options to build the HTTP request
   */


  post(options) {
    var _this6 = this;

    return (0,C_Users_dell_Desktop_E_Constat_E_ConstatFrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this6.request(Object.assign(Object.assign({}, options), {
        method: 'POST'
      }));
    })();
  }
  /**
   * Perform an Http PUT request given a set of options
   * @param options Options to build the HTTP request
   */


  put(options) {
    var _this7 = this;

    return (0,C_Users_dell_Desktop_E_Constat_E_ConstatFrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this7.request(Object.assign(Object.assign({}, options), {
        method: 'PUT'
      }));
    })();
  }
  /**
   * Perform an Http PATCH request given a set of options
   * @param options Options to build the HTTP request
   */


  patch(options) {
    var _this8 = this;

    return (0,C_Users_dell_Desktop_E_Constat_E_ConstatFrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this8.request(Object.assign(Object.assign({}, options), {
        method: 'PATCH'
      }));
    })();
  }
  /**
   * Perform an Http DELETE request given a set of options
   * @param options Options to build the HTTP request
   */


  delete(options) {
    var _this9 = this;

    return (0,C_Users_dell_Desktop_E_Constat_E_ConstatFrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this9.request(Object.assign(Object.assign({}, options), {
        method: 'DELETE'
      }));
    })();
  }

}

const CapacitorHttp = registerPlugin('CapacitorHttp', {
  web: () => new CapacitorHttpPluginWeb()
});
/******** END HTTP PLUGIN ********/



/***/ }),

/***/ 3955:
/*!***********************************************!*\
  !*** ./src/app/tab2/tab2.page.css?ngResource ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "canvas {\r\n    display: block;\r\n    border: 1px solid rgb(255, 255, 255);\r\n    background-color: var(--ion-color-success);\r\n  }\r\n\r\n .scan-box{\r\n  border: 2px solid #fff;\r\n  box-shadow: 0 0 0 100vmax rgba(0,0,0,0.5);\r\n  content: '';\r\n  display: block;\r\n  left:50%;\r\n  height:300px;\r\n  position: absolute;\r\n  top:50%;\r\n  transform: translate(-50%,-50%);\r\n  width: 300px;\r\n }\r\n\r\n .step-title{\r\n  text-align: center;\r\n  margin-top: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsb0NBQW9DO0lBQ3BDLDBDQUEwQztFQUM1Qzs7Q0FFRDtFQUNDLHNCQUFzQjtFQUN0Qix5Q0FBeUM7RUFDekMsV0FBVztFQUNYLGNBQWM7RUFDZCxRQUFRO0VBQ1IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsK0JBQStCO0VBQy9CLFlBQVk7Q0FDYjs7Q0FFQTtFQUNDLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoidGFiMi5wYWdlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbImNhbnZhcyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxuICB9XHJcblxyXG4gLnNjYW4tYm94e1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMTAwdm1heCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbGVmdDo1MCU7XHJcbiAgaGVpZ2h0OjMwMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6NTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gfVxyXG5cclxuIC5zdGVwLXRpdGxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59Il19 */";

/***/ }),

/***/ 1748:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [style.visibility]=\"content_visibility\"> \n  <ion-toolbar>\n    <ion-title>\n      2 smartphones\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<div class=\"scan-box\" [style.visibility]=\"!content_visibility\" ></div>\n<ion-content class=\"ion-padding\" [style.visibility]=\"content_visibility\">\n  <div  class=\"flex justify-content-center ion-margin-top relative\" style=\"align-items: flex-start; flex-wrap: wrap; margin-top: -15px;\">\n   \n    <div class=\"flex flex-column align-items-center justify-content-center\" style=\"width: 25%; margin-top: 15px;\"\n      *ngFor=\"let slide of slides; let index = index; let first = first; let last = last;\">\n      <div \n        class=\"flex flex-column align-items-center justify-content-center bold text-medium \"\n        style=\"width: 30px; height: 30px; border-radius: 15px;\"\n        [style.background]=\"slide === currentSlide ? 'var(--ion-color-primary)':'var(--ion-color-light-shade)'\"\n        [style.color]=\"slide === currentSlide ? 'var(--ion-color-light)':'var(--ion-color-dark)'\"\n        >\n        {{ index + 1 }}\n  </div>\n      <div [style.color]=\"slide === currentSlide ? 'var(--ion-color-primary)':'var(--ion-color-medium)'\"\n        \n      class=\"step-title\">\n        {{ slide }}\n</div>\n    </div>\n  </div>\n  <ion-slides [options]=\"slidesOpts\"  (ionSlideDidChange)=\"onSlideDidChange()\" (ionSlideWillChange)=\"onSlideWillChange()\">\n    <ng-container *ngFor=\"let slide of slides\">\n      <ion-slide>\n        <div style=\"width: 100%;\" *ngIf=\"slide==='Accident'\">\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label position=\"floating\">Accident Site</ion-label>\n                <ion-input placeholder=\"Enter Accident Site\" [(ngModel)]=\"constat.accidentSite\" #test=\"ngModel\" required minlength=\"3\"></ion-input>\n              </ion-item>\n              <ion-text color=\"danger\" *ngIf=\"test.invalid && (test.dirty || test.touched)\">\n                <span class=\"text-tiny\">\n                  Field required\n                </span>\n              </ion-text>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label>Blessé(s)</ion-label>\n                <ion-toggle slot=\"end\" [(ngModel)]=\"constat.hurtPeople\" (ngModelChange)=\"onHurtPeopleOn()\"></ion-toggle>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label>Dégats matériels</ion-label>\n                <ion-toggle slot=\"end\" [(ngModel)]=\"constat.materialDamageOtherThenAorB\"></ion-toggle>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          \n        </div>\n        <div *ngIf=\"slide==='Compagnie Assurance'\">\n          <ion-button id=\"open-modal\" expand=\"block\">Ajouter témoins</ion-button>\n          <p>{{ message }}</p>\n          <ion-modal trigger=\"open-modal\" (willDismiss)=\"onWillDismiss($event)\">\n            <ng-template>\n              <ion-header>\n                <ion-toolbar>\n                  <ion-buttons slot=\"start\">\n                    <ion-button (click)=\"cancel()\">Annuler</ion-button>\n                  </ion-buttons>\n                  <ion-title>Welcome</ion-title>\n                  <ion-buttons slot=\"end\">\n                    <ion-button (click)=\"confirm()\" [strong]=\"true\">Confirmer</ion-button>\n                  </ion-buttons>\n                </ion-toolbar>\n              </ion-header>\n              <ion-content class=\"ion-padding\">\n                <ion-item>\n                  <ion-label position=\"floating\">Prénom</ion-label>\n                  <ion-input placeholder=\"Enter witness First name\" [(ngModel)]=\"witness.firstname\"></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label position=\"floating\">Nom</ion-label>\n                  <ion-input placeholder=\"Enter witness Last name\" [(ngModel)]=\"witness.lastname\"></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label position=\"floating\">Email</ion-label>\n                  <ion-input placeholder=\"Enter witness Email\" [(ngModel)]=\"witness.email\"></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label position=\"floating\">Addresse</ion-label>\n                  <ion-input placeholder=\"Enter witness Address\" [(ngModel)]=\"witness.address\"></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label position=\"floating\">Telephone numéro</ion-label>\n                  <ion-input type=\"tel\" placeholder=\"+216 11 111 111\" [(ngModel)]=\"witness.phone\"></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Passager avec vehicule A</ion-label>\n                  <ion-toggle slot=\"end\" [(ngModel)]=\"witness.passenger\"></ion-toggle>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Passager avec vehicule B</ion-label>\n                  <ion-toggle slot=\"end\"></ion-toggle>\n                </ion-item>\n              </ion-content>\n            </ng-template>\n          </ion-modal>\n          <h1>{{text3}}</h1>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label position=\"floating\">Sociéte d'assurance</ion-label>\n                <ion-input placeholder=\"Enter Insurence Company Name\" [(ngModel)]=\"vehiculeInforamtion.insurenceCompanyInformation.insurenceCompanyName\" #icn=\"ngModel\" required minlength=\"2\"></ion-input>\n              </ion-item>\n              <ion-text color=\"danger\" *ngIf=\"icn.invalid && (icn.dirty || icn.touched)\">\n                <span class=\"text-tiny\">\n                  Field required\n                </span>\n              </ion-text>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label position=\"floating\">Contrat d'assurance N°</ion-label>\n                <ion-input placeholder=\"Enter Insurance Contract Number\" [(ngModel)]=\"vehiculeInforamtion.insurenceCompanyInformation.insuranceContractNumber\" #iccn=\"ngModel\" required minlength=\"10\" maxlength=\"12\"></ion-input>\n              </ion-item>\n              <ion-text color=\"danger\" *ngIf=\"iccn.invalid && (iccn.dirty || iccn.touched)\">\n                <span class=\"text-tiny\">\n                  Field required\n                </span>\n              </ion-text>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label position=\"floating\">Agence</ion-label>\n                <ion-input placeholder=\"Enter Agency Name\" [(ngModel)]=\"vehiculeInforamtion.insurenceCompanyInformation.agencyName\" #ican=\"ngModel\" required minlength=\"2\"> </ion-input>\n              </ion-item>\n              <ion-text color=\"danger\" *ngIf=\"ican.invalid && (ican.dirty || ican.touched)\">\n                <span class=\"text-tiny\">\n                  Field required\n                </span>\n              </ion-text>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label>Date début</ion-label>\n                <ion-input\n                  id=\"begindate\"\n                  class=\"ion-text-end\"\n                ></ion-input>\n                <ion-popover trigger=\"begindate\" size=\"cover\">\n                  <ng-template>\n                    <ion-datetime\n                      presentation=\"begindate\"\n                      [(ngModel)]=\"vehiculeInforamtion.insurenceCompanyInformation.begingDate\"\n                      locale=\"sl-SI\" required \n                    ></ion-datetime>\n                  </ng-template>\n                </ion-popover>\n              </ion-item>\n              \n            </ion-col>\n          </ion-row>\n          \n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label>Date fin</ion-label>\n                <ion-input\n                  id=\"enddate\"\n                  class=\"ion-text-end\"\n                ></ion-input>\n                <ion-popover trigger=\"enddate\" size=\"cover\">\n                  <ng-template>\n                    <ion-datetime\n                      presentation=\"enddate\"\n                      [(ngModel)]=\"vehiculeInforamtion.insurenceCompanyInformation.endDate\"\n                      locale=\"sl-SI\" required #iced=\"ngModel\"\n                    ></ion-datetime>\n                  </ng-template>\n                </ion-popover>\n              </ion-item>\n              \n            </ion-col>\n          </ion-row>\n        </div>\n        <div *ngIf=\"slide==='Conducteur'\">\n          <h1>{{text4}}</h1>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label position=\"floating\">Prénom</ion-label>\n                <ion-input placeholder=\"Enter driver First name\" [(ngModel)]=\"vehiculeInforamtion.driverInformation.firstname\" #difn=\"ngModel\"></ion-input>\n              </ion-item>\n              <ion-text color=\"danger\" *ngIf=\"difn.invalid && (difn.dirty || difn.touched)\">\n                <span class=\"text-tiny\">\n                  Field required\n                </span>\n              </ion-text>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label position=\"floating\">Nom</ion-label>\n                <ion-input placeholder=\"Enter driver Last name\" [(ngModel)]=\"vehiculeInforamtion.driverInformation.lastname\" #diln=\"ngModel\"></ion-input>\n              </ion-item>\n              <ion-text color=\"danger\" *ngIf=\"diln.invalid && (diln.dirty || diln.touched)\">\n                <span class=\"text-tiny\">\n                  Field required\n                </span>\n              </ion-text>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label position=\"floating\">Email</ion-label>\n                <ion-input placeholder=\"Enter driver Email\" [(ngModel)]=\"vehiculeInforamtion.driverInformation.email\" #diem=\"ngModel\"></ion-input>\n              </ion-item>\n              <ion-text color=\"danger\" *ngIf=\"diem.invalid && (diem.dirty || diem.touched)\">\n                <span class=\"text-tiny\">\n                  Field required\n                </span>\n              </ion-text>\n            </ion-col>\n          </ion-row>\n          \n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label position=\"floating\">Addresse</ion-label>\n                <ion-input placeholder=\"Enter driver Address\" [(ngModel)]=\"vehiculeInforamtion.driverInformation.adress\" #dia=\"ngModel\"></ion-input>\n              </ion-item>\n              <ion-text color=\"danger\" *ngIf=\"dia.invalid && (dia.dirty || dia.touched)\">\n                <span class=\"text-tiny\">\n                  Field required\n                </span>\n              </ion-text>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label position=\"floating\">Permis de conduire N°</ion-label>\n                <ion-input placeholder=\"Enter driver Licence Number\" [(ngModel)]=\"vehiculeInforamtion.driverInformation.licenceNumber\" #dilnb=\"ngModel\"></ion-input>\n              </ion-item>\n              <ion-text color=\"danger\" *ngIf=\"dilnb.invalid && (dilnb.dirty || dilnb.touched)\">\n                <span class=\"text-tiny\">\n                  Field required\n                </span>\n              </ion-text>\n            </ion-col>\n          </ion-row>\n          \n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label>Délivré le</ion-label>\n                <ion-input\n                  id=\"licencedate\"\n                  class=\"ion-text-end\"\n                ></ion-input>\n                <ion-popover trigger=\"licencedate\" size=\"cover\">\n                  <ng-template>\n                    <ion-datetime\n                      presentation=\"licencedate\"\n                      [(ngModel)]=\"vehiculeInforamtion.driverInformation.licenceDate\"\n                      locale=\"sl-SI\" required\n                    ></ion-datetime>\n                  </ng-template>\n                </ion-popover>\n              </ion-item>\n              \n            </ion-col>\n          </ion-row>\n        </div>\n        <div *ngIf=\"slide==='Assuré'\">\n          <h1>{{text5}}</h1>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label position=\"floating\">Prénom</ion-label>\n                <ion-input placeholder=\"Enter Insured First name\" [(ngModel)]=\"vehiculeInforamtion.insuredInforamation.firstname\" #iifn=\"ngModel\"></ion-input>\n              </ion-item>\n              <ion-text color=\"danger\" *ngIf=\"iifn.invalid && (iifn.dirty || iifn.touched)\">\n                <span class=\"text-tiny\">\n                  Field required\n                </span>\n              </ion-text>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label position=\"floating\">Nom</ion-label>\n                <ion-input placeholder=\"Enter Insured Last name\" [(ngModel)]=\"vehiculeInforamtion.insuredInforamation.lastname\" #iiln=\"ngModel\"></ion-input>\n              </ion-item>\n              <ion-text color=\"danger\" *ngIf=\"iiln.invalid && (iiln.dirty || iiln.touched)\">\n                <span class=\"text-tiny\">\n                  Field required\n                </span>\n              </ion-text>\n            </ion-col>\n          </ion-row>\n          \n          \n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label position=\"floating\">Addresse</ion-label>\n                <ion-input placeholder=\"Enter Insured Address\" [(ngModel)]=\"vehiculeInforamtion.insuredInforamation.adress\" #iia=\"ngModel\"></ion-input>\n              </ion-item>\n              <ion-text color=\"danger\" *ngIf=\"iia.invalid && (iia.dirty || iia.touched)\">\n                <span class=\"text-tiny\">\n                  Field required\n                </span>\n              </ion-text>\n            </ion-col>\n          </ion-row>\n          \n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label position=\"floating\">Téléphone N°</ion-label>\n                <ion-input type=\"tel\" placeholder=\"+216 11 111 111\" [(ngModel)]=\"vehiculeInforamtion.insuredInforamation.phone\" required #iip=\"ngModel\"></ion-input>\n              </ion-item>\n\n              <ion-text color=\"danger\" *ngIf=\"iip.invalid && (iip.dirty || iip.touched)\">\n                <span class=\"text-tiny\">\n                  Field required\n                </span>\n              </ion-text>\n            </ion-col>\n          </ion-row>\n          \n          <h1>{{text}}</h1>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label position=\"floating\">Marque</ion-label>\n                <ion-input placeholder=\"Enter vehicule brand\" [(ngModel)]=\"vehiculeInforamtion.vehicule.brand\" required #vivb=\"ngModel\"> </ion-input>\n              </ion-item>\n              <ion-text color=\"danger\" *ngIf=\"vivb.invalid && (vivb.dirty || vivb.touched)\">\n                <span class=\"text-tiny\">\n                  Field required\n                </span>\n              </ion-text>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label position=\"floating\">Type</ion-label>\n                <ion-input placeholder=\"Enter vehicule type\" [(ngModel)]=\"vehiculeInforamtion.vehicule.type\" #vivt=\"ngModel\"></ion-input>\n              </ion-item>\n              <ion-text color=\"danger\" *ngIf=\"vivt.invalid && (vivt.dirty || vivt.touched)\">\n                <span class=\"text-tiny\">\n                  Field required\n                </span>\n              </ion-text>\n            </ion-col>\n          </ion-row>\n          \n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label position=\"floating\">Immatriculation</ion-label>\n                <ion-input placeholder=\"Enter vehicule plate\" [(ngModel)]=\"vehiculeInforamtion.vehicule.carPlate\" #vivp=\"ngModel\"></ion-input>\n              </ion-item>\n              <ion-text color=\"danger\" *ngIf=\"vivp.invalid && (vivp.dirty || vivp.touched)\">\n                <span class=\"text-tiny\">\n                  Field required\n                </span>\n              </ion-text>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label position=\"floating\">Direction</ion-label>\n                <ion-input placeholder=\"Enter vehicule direction coming from ... going to ...\" [(ngModel)]=\"vehiculeInforamtion.vehicule.direction\" #vivd=\"ngModel\"></ion-input>\n              </ion-item>\n              <ion-text color=\"danger\" *ngIf=\"vivd.invalid && (vivd.dirty || vivd.touched)\">\n                <span class=\"text-tiny\">\n                  Field required\n                </span>\n              </ion-text>\n            </ion-col>\n          </ion-row>\n          \n        </div>\n        <div *ngIf=\"slide==='Damage'\">\n          <h1>{{text2}}</h1>\n          <ion-list>\n            <ion-radio-group [allowEmptySelection]=\"true\" value=\"chocs\" [(ngModel)]=\"constat.vehiculeInformationA.apperantDamage\">\n              <ion-item>\n                <ion-label>coté avant droit</ion-label>\n                <ion-radio slot=\"end\" value=\"pare à choc Ad\"></ion-radio>\n              </ion-item>\n          \n              <ion-item>\n                <ion-label> coté gauche</ion-label>\n                <ion-radio slot=\"end\" value=\"pare à choc Ag\"></ion-radio>\n              </ion-item>\n          \n              <ion-item>\n                <ion-label> choc avant</ion-label>\n                <ion-radio slot=\"end\" value=\"pare à choc AM\"></ion-radio>\n              </ion-item>\n          \n              <ion-item>\n                <ion-label>coté droit </ion-label>\n                <ion-radio slot=\"end\" value=\"cote droit avant\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Arrière Droit</ion-label>\n                <ion-radio slot=\"end\" value=\"cote droit arriére\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Arrière </ion-label>\n                <ion-radio slot=\"end\" value=\"cote arriére\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Arrière gauche </ion-label>\n                <ion-radio slot=\"end\" value=\"cote arrière gauche\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>coté gauche </ion-label>\n                <ion-radio slot=\"end\" value=\"cote gauche \"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n          </ion-list>\n          <ion-item>\n            <ion-label position=\"floating\">Observation</ion-label>\n            <ion-input placeholder=\"Enter Observation \" [(ngModel)]=\"constat.vehiculeInformationA.observation\"></ion-input>\n          </ion-item>\n          <img src=\"assets/icon/car choc.png\" alt=\"car choc\">\n\n          \n        </div>\n        <div *ngIf=\"slide==='Croquis'\">\n          <h3>Sketch</h3>\n          \n          <div>\n           \n            <canvas #canvas (touchstart)=\"startDrawing($event)\" (touchmove)=\"moved($event)\"></canvas>\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-button color=\"danger\" (click)=\"clearPad()\">Clear</ion-button>\n                </ion-col>\n                <ion-col size=\"4\" offset=\"2\">\n                  <ion-button color=\"secondary\" (click)=\"savePad()\">Save</ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n          <ion-item *ngFor=\"let cir of circumstances\">\n            <ion-checkbox slot=\"start\"></ion-checkbox>\n            <ion-label>{{cir}}</ion-label>\n          </ion-item>\n          \n        </div>\n        <div *ngIf=\"slide==='Signature'\">\n          <h3>Signature</h3>\n            <div>\n              <canvas #canvas2 (touchstart)=\"startDrawingSignature($event)\" (touchmove)=\"movedSignature($event)\"></canvas>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"6\">\n                    <ion-button color=\"danger\" (click)=\"clearPadSignature()\">Effacer</ion-button>\n                  </ion-col>\n                  <ion-col size=\"4\" offset=\"2\">\n                    <ion-button color=\"secondary\" (click)=\"savePadSignature()\">Enregistrer</ion-button>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n          </div>\n      </ion-slide>\n    </ng-container>\n  </ion-slides>\n</ion-content>\n<ion-footer >\n  <ion-toolbar>\n    <div class=\"full-width flex align-items-center justify-content-space-between\">\n      <ion-button [style.visibility]=\"(isBeginning) ? 'hidden' :''\" (click)=\"onBack()\" color=\"dark\" strong shape=\"round\">\n        <span>Retour</span>\n      </ion-button>\n      <ion-button color=\"primary\" [style.visibility]=\"(isEnding) ? 'hidden' :''\" (click)=\"onNext()\" [style.visibility]=\"content_visibility\" strong shape=\"round\">\n        <span>Suivant</span>\n      </ion-button>\n      \n    </div>\n    <div *ngIf=\"isEnding==true && idvehiculeInformationA==-1\">\n      <ion-button color=\"primary\" expand=\"block\" (click)=\"setOpenQrCodeGenerator(true)\" strong shape=\"round\">\n        <span>Generate qrCode</span>\n      </ion-button>\n    </div>\n    <div *ngIf=\"isEnding==true && idvehiculeInformationA!=-1\">\n      <ion-button color=\"primary\"  expand=\"block\" (click)=\"saveConstat()\" strong shape=\"round\">\n        <span>Enregister Constat</span>\n      </ion-button>\n    </div>\n    <ion-modal [isOpen]=\"isModalOpenQrCodeGenerator\">\n      <ng-template>\n        <ion-header>\n          <ion-toolbar>\n            <ion-title>Qr CODE GENRATEUR</ion-title>\n            <ion-buttons slot=\"end\">\n              <ion-button (click)=\"setOpenQrCodeGenerator(false)\">Close</ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-header>\n        <ion-content class=\"ion-padding\">\n          <qrcode [qrdata]=\"test\" [width]=\"256\" [errorCorrectionLevel]=\"'M'\"></qrcode>\n        </ion-content>\n      </ng-template>\n    </ion-modal>\n    <div *ngIf=\"isBeginning==true\">\n      <ion-button color=\"primary\" expand=\"block\"  (click)=\"startScan()\" [style.visibility]=\"content_visibility\" strong shape=\"round\">\n        <span>Scanner qrCode</span>\n      </ion-button>\n    </div>\n    <div *ngIf=\"content_visibility==='hidden'\">\n      <ion-button color=\"primary\" (click)=\"stopScan()\" strong shape=\"round\">\n        <span>Stop Scan</span>\n      </ion-button>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map