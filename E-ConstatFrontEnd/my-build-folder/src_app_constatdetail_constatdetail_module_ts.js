"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_constatdetail_constatdetail_module_ts"],{

/***/ 3811:
/*!***************************************************************!*\
  !*** ./src/app/constatdetail/constatdetail-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConstatdetailPageRoutingModule": () => (/* binding */ ConstatdetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _constatdetail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constatdetail.page */ 1730);




const routes = [
    {
        path: '',
        component: _constatdetail_page__WEBPACK_IMPORTED_MODULE_0__.ConstatdetailPage
    }
];
let ConstatdetailPageRoutingModule = class ConstatdetailPageRoutingModule {
};
ConstatdetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConstatdetailPageRoutingModule);



/***/ }),

/***/ 1002:
/*!*******************************************************!*\
  !*** ./src/app/constatdetail/constatdetail.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConstatdetailPageModule": () => (/* binding */ ConstatdetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _constatdetail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constatdetail-routing.module */ 3811);
/* harmony import */ var _constatdetail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constatdetail.page */ 1730);







let ConstatdetailPageModule = class ConstatdetailPageModule {
};
ConstatdetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _constatdetail_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConstatdetailPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_constatdetail_page__WEBPACK_IMPORTED_MODULE_1__.ConstatdetailPage]
    })
], ConstatdetailPageModule);



/***/ }),

/***/ 1730:
/*!*****************************************************!*\
  !*** ./src/app/constatdetail/constatdetail.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConstatdetailPage": () => (/* binding */ ConstatdetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _constatdetail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constatdetail.page.html?ngResource */ 8812);
/* harmony import */ var _constatdetail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constatdetail.page.scss?ngResource */ 9453);
/* harmony import */ var _model_constat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/constat */ 6139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_constat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/constat.service */ 737);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _model_vehicule_information__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/vehicule-information */ 5487);
/* harmony import */ var _model_insurance_company_information__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/insurance-company-information */ 795);
/* harmony import */ var _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/pdf-generator/ngx */ 7330);
/* harmony import */ var _model_driver_information__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/driver-information */ 9090);
/* harmony import */ var _model_insured_inforamation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/insured-inforamation */ 9246);
/* harmony import */ var _model_vehicule__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../model/vehicule */ 3004);













let ConstatdetailPage = class ConstatdetailPage {
    constructor(router, serviceConstat, route, pdf) {
        this.router = router;
        this.serviceConstat = serviceConstat;
        this.route = route;
        this.pdf = pdf;
        this.constat = new _model_constat__WEBPACK_IMPORTED_MODULE_2__.Constat();
    }
    closeModal() {
        this.router.navigate(['/admin']);
    }
    downloadInvoice() {
        this.content = document.getElementById('GenerateConstatPdf').innerHTML;
        let options = {
            documentSize: 'A4',
            type: 'share',
            // landscape: 'portrait',
            fileName: 'Constat' + this.constat.id + '.pdf'
        };
        this.pdf.fromData(this.content, options)
            .then((base64) => {
            console.log('OK', base64);
        }).catch((error) => {
            console.log('error', error);
        });
    }
    ngOnInit() {
        this.constat.sketch = "";
        this.constat = new _model_constat__WEBPACK_IMPORTED_MODULE_2__.Constat();
        this.constat.vehiculeInformationA = new _model_vehicule_information__WEBPACK_IMPORTED_MODULE_4__.VehiculeInformation();
        this.constat.vehiculeInformationB = new _model_vehicule_information__WEBPACK_IMPORTED_MODULE_4__.VehiculeInformation();
        this.constat.vehiculeInformationA.insurenceCompanyInformation = new _model_insurance_company_information__WEBPACK_IMPORTED_MODULE_5__.InsurenceCompanyInformation();
        this.constat.vehiculeInformationB.insurenceCompanyInformation = new _model_insurance_company_information__WEBPACK_IMPORTED_MODULE_5__.InsurenceCompanyInformation();
        this.constat.vehiculeInformationA.driverInformation = new _model_driver_information__WEBPACK_IMPORTED_MODULE_7__.DriverInformation();
        this.constat.vehiculeInformationB.driverInformation = new _model_driver_information__WEBPACK_IMPORTED_MODULE_7__.DriverInformation();
        this.constat.vehiculeInformationA.insuredInforamation = new _model_insured_inforamation__WEBPACK_IMPORTED_MODULE_8__.InsuredInformation();
        this.constat.vehiculeInformationB.insuredInforamation = new _model_insured_inforamation__WEBPACK_IMPORTED_MODULE_8__.InsuredInformation();
        this.constat.vehiculeInformationA.vehicule = new _model_vehicule__WEBPACK_IMPORTED_MODULE_9__.Vehicule();
        this.constat.vehiculeInformationB.vehicule = new _model_vehicule__WEBPACK_IMPORTED_MODULE_9__.Vehicule();
        this.idConstat = this.route.snapshot.params['id'];
        this.serviceConstat.getConstatByid(this.idConstat).subscribe(c => {
            this.constat = c;
            console.log(this.constat);
        });
    }
};
ConstatdetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _services_constat_service__WEBPACK_IMPORTED_MODULE_3__.ConstatService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_6__.PDFGenerator }
];
ConstatdetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-constatdetail',
        template: _constatdetail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_constatdetail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ConstatdetailPage);



/***/ }),

/***/ 6139:
/*!**********************************!*\
  !*** ./src/app/model/constat.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Constat": () => (/* binding */ Constat)
/* harmony export */ });
class Constat {
}


/***/ }),

/***/ 9090:
/*!*********************************************!*\
  !*** ./src/app/model/driver-information.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverInformation": () => (/* binding */ DriverInformation)
/* harmony export */ });
class DriverInformation {
}


/***/ }),

/***/ 795:
/*!********************************************************!*\
  !*** ./src/app/model/insurance-company-information.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsurenceCompanyInformation": () => (/* binding */ InsurenceCompanyInformation)
/* harmony export */ });
class InsurenceCompanyInformation {
}


/***/ }),

/***/ 9246:
/*!***********************************************!*\
  !*** ./src/app/model/insured-inforamation.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsuredInformation": () => (/* binding */ InsuredInformation)
/* harmony export */ });
class InsuredInformation {
}


/***/ }),

/***/ 5487:
/*!***********************************************!*\
  !*** ./src/app/model/vehicule-information.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehiculeInformation": () => (/* binding */ VehiculeInformation)
/* harmony export */ });
class VehiculeInformation {
}


/***/ }),

/***/ 3004:
/*!***********************************!*\
  !*** ./src/app/model/vehicule.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vehicule": () => (/* binding */ Vehicule)
/* harmony export */ });
class Vehicule {
}


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

/***/ 9453:
/*!******************************************************************!*\
  !*** ./src/app/constatdetail/constatdetail.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25zdGF0ZGV0YWlsLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 8812:
/*!******************************************************************!*\
  !*** ./src/app/constatdetail/constatdetail.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons (click)=\"closeModal()\" slot=\"start\">\n      <ion-button slot=\"icon\">\n        <ion-icon class=\"icon\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"title-ios ion-text-capitalize\">Constat</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div id=\"GenerateConstatPdf\" \n    style=\"max-width: 800px;margin: auto;padding: 30px;border: 1px solid #eee;box-shadow: 0 0 10px rgba(0, 0, 0, .15);font-size: 16px;line-height: 24px;font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;color: #555;\">\n    <table cellpadding=\"0\" cellspacing=\"0\" style=\"width: 100%;line-height: inherit;text-align: left;\">\n      <tr class=\"top\">\n        <td colspan=\"2\" style=\"padding: 5px;vertical-align: top;\">\n          <table style=\"width: 100%;line-height: inherit;text-align: left;\">\n            <tr>\n              <td class=\"title\"\n                style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;font-size: 45px;line-height: 45px;color: #333;\">\n                <img alt=\"Constat sketch\" src='{{constat.sketch}}'  style=\"width:100%; max-width:300px;\"/>\n              </td>\n\n              <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n                Constat #<br>\n                Crée le: {{constat.accidentDate}}<br>\n              </td>\n            </tr>\n          </table>\n        </td>\n      </tr>\n\n      <tr class=\"information\">\n        <td colspan=\"2\" style=\"padding: 5px;vertical-align: top;\">\n          <table style=\"width: 100%;line-height: inherit;text-align: left;\">\n            <tr>\n              <td style=\"padding: 5px;vertical-align: top;padding-bottom: 40px;\">\n                Lieu d'accident:<br>\n                {{constat.accidentSite}}<br>\n              </td>\n\n              <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 40px;\">\n                Blessés:<br>\n                {{constat.hurtPeople==true ? 'vrai':'faux'}}<br>\n                Dégats matériels autres qu'aux véhicules a et b:<br>\n                {{constat.materialDamageOtherThenAorB==true ? 'vrai':'faux'}}<br>\n              </td>\n            </tr>\n          </table>\n        </td>\n      </tr>\n\n      <tr class=\"heading\">\n        <td style=\"padding: 5px;vertical-align: top;background: #eee;border-bottom: 1px solid #ddd;font-weight: bold;\">\n          Vehicule Information A\n        </td>\n\n        <td\n          style=\"padding: 5px;vertical-align: top;text-align: right;background: #eee;border-bottom: 1px solid #ddd;font-weight: bold;\">\n          \n        </td>\n      </tr>\n\n      <tr class=\"details\">\n        <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n          Véhicule assuré par\n        </td>\n\n        <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n          {{constat.vehiculeInformationA.insurenceCompanyInformation.insurenceCompanyName}}\n        </td>\n      </tr>\n      <tr class=\"details\">\n        <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n          Police d'Assurance N°\n        </td>\n\n        <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n          {{constat.vehiculeInformationA.insurenceCompanyInformation.insuranceContractNumber}}\n        </td>\n      </tr>\n      <tr class=\"details\">\n        <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n          Agence\n        </td>\n\n        <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n          {{constat.vehiculeInformationA.insurenceCompanyInformation.agencyName}}\n        </td>\n      </tr>\n      <tr class=\"details\">\n        <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n          Attestaion valable du\n        </td>\n\n        <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n          {{constat.vehiculeInformationA.insurenceCompanyInformation.begingDate}}\n        </td>\n      </tr>\n      <tr class=\"details\">\n        <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n          au \n        </td>\n\n        <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n          {{constat.vehiculeInformationA.insurenceCompanyInformation.endDate}}\n        </td>\n      </tr>\n      <tr class=\"details\">\n        <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n          Nom du conducteur\n        </td>\n\n        <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n          {{constat.vehiculeInformationA.driverInformation.lastname}}\n        </td>\n      </tr>\n      <tr class=\"details\">\n        <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n          Prénom\n        </td>\n\n        <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n          {{constat.vehiculeInformationA.driverInformation.firstname}}\n        </td>\n      </tr>\n      <tr class=\"details\">\n        <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n          Adresse\n        </td>\n\n        <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n          {{constat.vehiculeInformationA.driverInformation.adress}}\n        </td>\n      </tr>\n      <tr class=\"details\">\n        <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n          Permis du conduire N°\n        </td>\n\n        <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n          {{constat.vehiculeInformationA.driverInformation.licenceNumber}}\n        </td>\n      </tr>\n      <tr class=\"details\">\n        <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n          Délivré le\n        </td>\n\n        <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n          {{constat.vehiculeInformationA.driverInformation.licenceDate}}\n        </td>\n      </tr>\n      <tr class=\"details\">\n        <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n          Nom Assuré\n        </td>\n\n        <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n          {{constat.vehiculeInformationA.insuredInforamation.lastname}}\n        </td>\n      </tr>\n      <tr class=\"details\">\n        <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n          Prénom\n        </td>\n\n        <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n          {{constat.vehiculeInformationA.insuredInforamation.firstname}}\n        </td>\n      </tr>\n      <tr class=\"details\">\n        <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n          Adresse\n        </td>\n\n        <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n          {{constat.vehiculeInformationA.insuredInforamation.adress}}\n        </td>\n      </tr>\n      <tr class=\"details\">\n        <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n          tél\n        </td>\n\n        <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n          {{constat.vehiculeInformationA.insuredInforamation.phone}}\n        </td>\n      </tr>\n      <tr class=\"details\">\n        <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n          Identité du véhicule(Marque , Type)\n        </td>\n\n        <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n          {{constat.vehiculeInformationA.vehicule.brand}},{{constat.vehiculeInformationA.vehicule.type}}\n        </td>\n      </tr>\n      <tr class=\"details\">\n        <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n         Immatriculation\n        </td>\n\n        <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n          {{constat.vehiculeInformationA.vehicule.carPlate}}\n        </td>\n      </tr>\n      <tr class=\"details\">\n        <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n         Sens suivi \n        </td>\n\n        <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n          {{constat.vehiculeInformationA.vehicule.direction}}\n        </td>\n      </tr>\n      <tr class=\"details\">\n        <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n         Choc Inital \n        </td>\n\n        <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n          {{constat.vehiculeInformationA.apperantDamage}}\n        </td>\n      </tr>\n      <tr class=\"details\">\n        <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n         observation \n        </td>\n\n        <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n          {{constat.vehiculeInformationA.observation}}\n        </td>\n      </tr>\n      <tr class=\"details\">\n        <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n         Circonstances\n        </td>\n\n        <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n          {{constat.circumstances}}\n        </td>\n      </tr>\n      <tr>\n        <td class=\"title\"\n          style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;font-size: 45px;line-height: 45px;color: #333;\">\n          <img alt=\"Constat signature\" src='{{constat.vehiculeInformationA.signature}}'  style=\"width:100%; max-width:300px;\"/>\n        </td>\n\n\n        <tr class=\"heading\">\n          <td style=\"padding: 5px;vertical-align: top;background: #eee;border-bottom: 1px solid #ddd;font-weight: bold;\">\n            Vehicule Information B\n          </td>\n  \n          <td\n            style=\"padding: 5px;vertical-align: top;text-align: right;background: #eee;border-bottom: 1px solid #ddd;font-weight: bold;\">\n            \n          </td>\n        </tr>\n  \n        <tr class=\"details\">\n          <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n            Véhicule assuré par\n          </td>\n  \n          <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n            {{constat.vehiculeInformationB.insurenceCompanyInformation.insurenceCompanyName}}\n          </td>\n        </tr>\n        <tr class=\"details\">\n          <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n            Police d'Assurance N°\n          </td>\n  \n          <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n            {{constat.vehiculeInformationB.insurenceCompanyInformation.insuranceContractNumber}}\n          </td>\n        </tr>\n        <tr class=\"details\">\n          <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n            Agence\n          </td>\n  \n          <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n            {{constat.vehiculeInformationB.insurenceCompanyInformation.agencyName}}\n          </td>\n        </tr>\n        <tr class=\"details\">\n          <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n            Attestaion valable du\n          </td>\n  \n          <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n            {{constat.vehiculeInformationB.insurenceCompanyInformation.begingDate}}\n          </td>\n        </tr>\n        <tr class=\"details\">\n          <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n            au \n          </td>\n  \n          <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n            {{constat.vehiculeInformationB.insurenceCompanyInformation.endDate}}\n          </td>\n        </tr>\n        <tr class=\"details\">\n          <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n            Nom du conducteur\n          </td>\n  \n          <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n            {{constat.vehiculeInformationB.driverInformation.lastname}}\n          </td>\n        </tr>\n        <tr class=\"details\">\n          <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n            Prénom\n          </td>\n  \n          <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n            {{constat.vehiculeInformationB.driverInformation.firstname}}\n          </td>\n        </tr>\n        <tr class=\"details\">\n          <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n            Adresse\n          </td>\n  \n          <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n            {{constat.vehiculeInformationB.driverInformation.adress}}\n          </td>\n        </tr>\n        <tr class=\"details\">\n          <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n            Permis du conduire N°\n          </td>\n  \n          <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n            {{constat.vehiculeInformationB.driverInformation.licenceNumber}}\n          </td>\n        </tr>\n        <tr class=\"details\">\n          <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n            Délivré le\n          </td>\n  \n          <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n            {{constat.vehiculeInformationB.driverInformation.licenceDate}}\n          </td>\n        </tr>\n        <tr class=\"details\">\n          <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n            Nom Assuré\n          </td>\n  \n          <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n            {{constat.vehiculeInformationB.insuredInforamation.lastname}}\n          </td>\n        </tr>\n        <tr class=\"details\">\n          <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n            Prénom\n          </td>\n  \n          <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n            {{constat.vehiculeInformationB.insuredInforamation.firstname}}\n          </td>\n        </tr>\n        <tr class=\"details\">\n          <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n            Adresse\n          </td>\n  \n          <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n            {{constat.vehiculeInformationB.insuredInforamation.adress}}\n          </td>\n        </tr>\n        <tr class=\"details\">\n          <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n            tél\n          </td>\n  \n          <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n            {{constat.vehiculeInformationB.insuredInforamation.phone}}\n          </td>\n        </tr>\n        <tr class=\"details\">\n          <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n            Identité du véhicule(Marque , Type)\n          </td>\n  \n          <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n            {{constat.vehiculeInformationB.vehicule.brand}},{{constat.vehiculeInformationA.vehicule.type}}\n          </td>\n        </tr>\n        <tr class=\"details\">\n          <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n           Immatriculation\n          </td>\n  \n          <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n            {{constat.vehiculeInformationB.vehicule.carPlate}}\n          </td>\n        </tr>\n        <tr class=\"details\">\n          <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n           Sens suivi \n          </td>\n  \n          <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n            {{constat.vehiculeInformationB.vehicule.direction}}\n          </td>\n        </tr>\n        <tr class=\"details\">\n          <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n           Choc Inital \n          </td>\n  \n          <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n            {{constat.vehiculeInformationB.apperantDamage}}\n          </td>\n        </tr>\n        <tr class=\"details\">\n          <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n           observation \n          </td>\n  \n          <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n            {{constat.vehiculeInformationB.observation}}\n          </td>\n        </tr>\n        <tr class=\"details\">\n          <td style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;\">\n           Circonstances\n          </td>\n  \n          <td style=\"padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;\">\n            {{constat.circumstances}}\n          </td>\n        </tr>\n        <tr>\n          <td class=\"title\"\n            style=\"padding: 5px;vertical-align: top;padding-bottom: 20px;font-size: 45px;line-height: 45px;color: #333;\">\n            <img alt=\"Constat signature\" src='{{constat.vehiculeInformationB.signature}}'  style=\"width:100%; max-width:300px;\"/>\n          </td>\n    </table>\n  </div>\n</ion-content>\n<ion-footer (click)=\"downloadInvoice()\">\n  <ion-toolbar color=\"dark\" class=\"ion-padding-horizontal\">\n    <div class=\"ion-text-center\">\n      <h4 class=\"ion-no-margin\">Télécharger Constat </h4>\n    </div>\n  </ion-toolbar>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_constatdetail_constatdetail_module_ts.js.map