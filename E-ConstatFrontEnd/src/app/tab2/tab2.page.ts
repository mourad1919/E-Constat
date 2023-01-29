import { Component, OnInit, ViewChild,OnDestroy  } from '@angular/core';
import { AlertController, IonContent, IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { IonSlides } from '@ionic/angular';
import { Constat } from '../model/constat';
import { VehiculeInformation } from '../model/vehicule-information';
import {InsurenceCompanyInformation} from '../model/insurance-company-information'
import { Witness } from '../model/witness';
import { DriverInformation } from '../model/driver-information';
import {InsuredInformation} from '../model/insured-inforamation';
import {Vehicule} from '../model/vehicule';
import { ConstatService } from '../services/constat.service';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

import { AfterViewInit, ElementRef } from '@angular/core';
import SignaturePad from 'signature_pad';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { User } from '../model/user';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.css']
})
export class Tab2Page {

  @ViewChild(IonModal) modal: IonModal;
  @ViewChild(IonSlides,{static:false}) ionSlides:IonSlides;
  @ViewChild(IonContent) content: IonContent;
  text:string="Information sur les véhicules A";
  text2:string="Damage  A";
  text3:string="Compagnie Assurance A";
  text4:string="Conducteur A";
  text5:string="Assuré A";
  idvehiculeInformationA:number=-1;
  lastid:number;
  test="test";
  isBeginning:boolean=true;
  isEnding:boolean=false;
  currentSlide:string;
  slides:string[];
  user:User=new User();//** */
  username:string=localStorage.getItem('username');
  circumstances:string[]=['EN_STATIONNEMENT','QUITTAI_UN_STATIONNEMENT'];
  message = 'Vous pouvez ajouter un témoin à tout moment en cliquant sur ce bouton';
  name: string;
  constat:Constat;
  witness:Witness;
  witnesses:Witness[]=[];
  vehiculeInforamtion:VehiculeInformation=new VehiculeInformation();
  constructor(private router:Router,private alertController: AlertController,private serviceUser:UserService, private serviceConstat:ConstatService,private serviceAuth:AuthService) {}
  public slidesOpts={
    allowTouchMove:false,
    autoHeight:true,
  };
  buildSlides(){
    const slides=['Accident','Compagnie Assurance','Conducteur','Assuré','Damage','Croquis','Signature'];
    this.currentSlide=slides[0];
    this.slides=slides;
  }
  ngOnInit(): void {
    this.content_visibility='show';
    this.buildSlides();
    this.constat=new Constat();
    this.witness=new Witness();
    this.constat.vehiculeInformationA=new VehiculeInformation();
    this.constat.vehiculeInformationB=new VehiculeInformation();
    this.vehiculeInforamtion.insurenceCompanyInformation=new InsurenceCompanyInformation();
    this.vehiculeInforamtion.driverInformation=new DriverInformation();
    this.constat.vehiculeInformationB.driverInformation=new DriverInformation();
    this.vehiculeInforamtion.insuredInforamation=new InsuredInformation();
    this.constat.vehiculeInformationB.insuredInforamation=new InsuredInformation();
    this.vehiculeInforamtion.vehicule=new Vehicule();
    this.constat.vehiculeInformationB.vehicule=new Vehicule();
    this.serviceConstat.getLastIdVehiculeInformation().subscribe((resultat)=>{
      this.lastid=resultat;
      console.log(resultat);
    })
  }
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
  onBack(){
    this.ionSlides.slidePrev();
    this.content.scrollToTop();
  }
  onNext(){
  
    this.ionSlides.slideNext();
    this.content.scrollToTop();
    
  }
  onSlideDidChange(){
    this.content.scrollToTop();
  }
  async onSlideWillChange(){
    const index=await this.ionSlides.getActiveIndex();
    this.currentSlide=this.slides[index];
    this.isBeginning=await this.ionSlides.isBeginning();
    this.isEnding=await this.ionSlides.isEnd();
  }
  addConstat(){
    console.log(JSON.stringify(this.constat));
    this.serviceConstat.addConstat(this.constat).subscribe((data)=>{
      console.log(this.constat);
      this.router.navigateByUrl("/constatdetail/"+data);
      console.log(this.constat.vehiculeInformationA.driverInformation.email);
      this.serviceConstat.sendEmail(this.constat.vehiculeInformationA.driverInformation.email,data).subscribe(()=>{

      });
    })
  }

  isModalOpenQrCodeGenerator = false;

  setOpenQrCodeGenerator(isOpen: boolean) {
    if(this.isSignature===true && this.isSignatureSaved===true){

      this.isModalOpenQrCodeGenerator = isOpen;
      this.test=(this.lastid+1).toString();

      console.log(this.vehiculeInforamtion);
      this.serviceConstat.saveVehiculeInforamtion(this.vehiculeInforamtion).subscribe(()=>{
        console.log("save vahicule information")
        console.log(this.vehiculeInforamtion);
      })
    }
    else{
      console.log("erreur");
    }
    
  }
  async checkPermission() {
    try {
      // check or request permission
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        // the user granted permission
        return true;
      }
      return false;
    } catch(e) {
      console.log(e);
    }
  }
  scannedResult: any;
  content_visibility = '';
  async startScan() {
    try {
      const permission = await this.checkPermission();
      if(!permission) {
        return;
      }
      await BarcodeScanner.hideBackground();
      document.querySelector('body').classList.add('scanner-active');
      this.content_visibility = 'hidden';
      const result = await BarcodeScanner.startScan();
      console.log(result);
      BarcodeScanner.showBackground();
      document.querySelector('body').classList.remove('scanner-active');
      this.content_visibility = '';
      if(result?.hasContent) {
        this.scannedResult = result.content;
        console.log(this.scannedResult);
        this.idvehiculeInformationA=this.scannedResult;
        console.log("***************************************");
        this.text="Information sur les véhicules B";
        this.text2="Damage  B";
        this.text3="Compagnie Assurance  B";
        this.text4="Conducteur  B";
        this.text5="Assuré  B";
      }
    } catch(e) {
      console.log(e);
      this.stopScan();
    }
  }

  stopScan() {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    document.querySelector('body').classList.remove('scanner-active');
    this.content_visibility = '';
  }

  ngOnDestroy(): void {
      this.stopScan();
  }
  logoutAction2(){
    this.serviceAuth.logout();
  }
  
  async onHurtPeopleOn(){
    if(this.constat.hurtPeople===true){
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'Important message',
        message: 'If people are injured please call the police 197 or 196',
        buttons: ['OK'],
      });
  
      await alert.present();
    }
    
  
  }
  //signature pad
  signaturePad: SignaturePad;
  signaturePad2: SignaturePad;
  @ViewChild('canvas') canvasEl : ElementRef;
  @ViewChild('canvas2') canvasEl2 : ElementRef;
  signatureImg: string;
  signatureImg2: string;

  ngAfterViewInit() {
    this.signaturePad2 = new SignaturePad(this.canvasEl2.nativeElement);
    this.signaturePad = new SignaturePad(this.canvasEl.nativeElement);
    
  }
/*****************Croquis */
  isSignature:boolean=false;
  isSignatureSaved:boolean=false;
  startDrawing(event: Event) {
    console.log(event);
    this.isSignature=true;
    // works in device not in browser

  }

  moved(event: Event) {
    // works in device not in browser
  }

  clearPad() {
    this.signaturePad.clear();
  }

  savePad() {
    const base64Data = this.signaturePad.toDataURL();
    this.signatureImg = base64Data;
    this.constat.sketch=this.signatureImg;
    console.log(this.signatureImg)
    this.isSignatureSaved=true;
  }
  //*****************SIGNATURE */
  startDrawingSignature(event: Event) {
    console.log(event);
    // works in device not in browser

  }

  movedSignature(event: Event) {
    // works in device not in browser
  }

  clearPadSignature() {
    this.signaturePad2.clear();
  }

  savePadSignature() {
    const base64Data = this.signaturePad2.toDataURL();
    this.signatureImg2 = base64Data;
    this.vehiculeInforamtion.signature=this.signatureImg2;
    console.log(this.signatureImg2)
  }
  saveConstat(){
    this.constat.vehiculeInformationB=this.vehiculeInforamtion;
    this.constat.vehiculeInformationA=new VehiculeInformation();
    console.log(this.constat);
    this.serviceConstat.saveConstatWithVehiculeInformationA(this.constat,this.idvehiculeInformationA).subscribe((data)=>{
      this.router.navigateByUrl("/constatdetail/"+data);
    });
  }
}







