import { AfterViewInit, Component, ElementRef, ViewChild,OnInit } from '@angular/core';
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
import * as L from 'leaflet';
import SignaturePad from 'signature_pad';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.css']
})
export class Tab1Page implements OnInit {
  accidentSite:string;
  map:L.map;
  markerIcon = {
    icon: L.icon({
      iconSize: [28, 44],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40],
      // specify the path here
      iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png"
    })
  };
  @ViewChild(IonModal) modal: IonModal;
  @ViewChild(IonModal) modal2: IonModal;
  @ViewChild(IonSlides,{static:false}) ionSlides:IonSlides;
  @ViewChild(IonContent) content: IonContent;
  isBeginning:boolean=true;
  isEnding:boolean=false;
  currentSlide:string;
  slides:string[];
  slides1:string[];
  user:User=new User();//** */
  username:string=localStorage.getItem('username');//** */
  circumstances:string[]=['EN_STATIONNEMENT','QUITTAI_UN_STATIONNEMENT'];
  message = 'Vous pouvez ajouter un témoin en cliquant sur ce bouton.';
  name: string;
  constat:Constat;
  witness:Witness;
  witnesses:Witness[]=[];
  currentSlideIndex:number=0;
  slide1=['Accident','Assuré A','Assurance','Conducteur'];
  slide2=['Damage A','Assuré B','Assurance B','Conducteur B'];
  slide3=['Damage B','Validation'];
  constructor(private router:Router,private alertController: AlertController,private serviceUser:UserService, private serviceConstat:ConstatService,private serviceAuth:AuthService) {}
  public slidesOpts={
    allowTouchMove:false,
    autoHeight:true,
  };
  //** */
  logoutAction(){
    this.serviceAuth.logout();
  }
  //** */
  buildSlides(){
    const slides1=['Accident','Assuré A','Assurance','Conducteur','Damage A','Assuré B','Assurance B','Conducteur B','Damage B','Validation'];
    
    this.currentSlide=this.slide1[0];
    this.slides=this.slide1;
    this.slides1=slides1;
  }
  ionViewDidEnter(){
    this.map=L.map('mapId').setView([36.779799,10.187136],7);
    this.map.scrollWheelZoom.enabled();
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution:
      '&copy; <a href=https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
    let marker;
    this.map.on("click",e=>{
      if(marker){
        this.map.removeLayer(marker);
      }
      console.log(e.latlng);
      marker=L.marker([e.latlng.lat,e.latlng.lng],this.markerIcon).addTo(this.map);
      this.accidentSite=e.latlng.lat+","+e.latlng.lng
      console.log(this.accidentSite);
      this.constat.accidentSite=this.accidentSite;
    })
  }
  ngOnInit(): void {
    
    this.serviceUser.getuser(this.username).subscribe((data)=>this.user=data);//** */
    this.currentSlideIndex=0;
    this.buildSlides();
    this.constat=new Constat();
    this.witness=new Witness();
    this.constat.vehiculeInformationA=new VehiculeInformation();
    this.constat.vehiculeInformationB=new VehiculeInformation();
    this.constat.vehiculeInformationA.insurenceCompanyInformation=new InsurenceCompanyInformation();
    this.constat.vehiculeInformationB.insurenceCompanyInformation=new InsurenceCompanyInformation();
    this.constat.vehiculeInformationA.driverInformation=new DriverInformation();
    this.constat.vehiculeInformationB.driverInformation=new DriverInformation();
    this.constat.vehiculeInformationA.insuredInforamation=new InsuredInformation();
    this.constat.vehiculeInformationB.insuredInforamation=new InsuredInformation();
    this.constat.vehiculeInformationA.vehicule=new Vehicule();
    this.constat.vehiculeInformationB.vehicule=new Vehicule();
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
  async onHurtPeopleOn(){
    if(this.constat.hurtPeople===true){
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'Important message',
        message: 'Si des personnes sont blessées, veuillez appeler la police au 197 ou au 196.',
        buttons: ['OK'],
      });
  
      await alert.present();
    }
    
  
  }
  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
  onWillDismiss2(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
  onBack(){
    this.currentSlideIndex--;
    if(this.currentSlideIndex<=3){
      this.slides=this.slide1;
    }
    if(this.currentSlideIndex>3&&this.currentSlideIndex<=7){
      this.slides=this.slide2;
    }
    if(this.currentSlideIndex>7){
      this.slides=this.slide3;
    }
    this.ionSlides.slidePrev();
    this.content.scrollToTop();
  }
  onNext(){
    
    this.currentSlideIndex++;
    if(this.currentSlideIndex<=3){
      this.slides=this.slide1;
    }
    if(this.currentSlideIndex>3&&this.currentSlideIndex<=7){
      this.slides=this.slide2;
    }
    if(this.currentSlideIndex>7){
      this.slides=this.slide3;
    }
    this.ionSlides.slideNext();
    this.content.scrollToTop();
    
  }
  onSlideDidChange(){
    this.content.scrollToTop();
  }
  async onSlideWillChange(){
    
    const index=await this.ionSlides.getActiveIndex();
    console.log(index);
    this.currentSlide=this.slides1[index];
    this.isBeginning=await this.ionSlides.isBeginning();
    this.isEnding=await this.ionSlides.isEnd();
  }
  addConstat(){
    //console.log(JSON.stringify(this.constat));
   if(typeof this.constat.sketch === 'undefined'){
      console.log("Ajouter un croquis pour passer à autre chose")
   }
   else{
    this.serviceConstat.addConstat(this.constat).subscribe((data)=>{
      console.log(data);
      this.router.navigateByUrl("/constatdetail/"+data);
      
    })
    console.log("clear")
   }
    
  }
  
  //signature pad
  signaturePad: SignaturePad;
  signaturePad1: SignaturePad;
  signaturePad2: SignaturePad;
  @ViewChild('canvas2') canvasEl2 : ElementRef;
  @ViewChild('canvas1') canvasEl1 : ElementRef;
  @ViewChild('canvas') canvasEl : ElementRef;
  
  signatureImg: string;
  signatureImg1: string;
  signatureImg2: string;

  
  ngAfterViewInit() {
    this.signaturePad = new SignaturePad(this.canvasEl.nativeElement);
    this.signaturePad1 = new SignaturePad(this.canvasEl1.nativeElement);
    this.signaturePad2 = new SignaturePad(this.canvasEl2.nativeElement);
  }

  startDrawing(event: Event) {
    console.log(event);
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
  }
  startDrawingSignatureA(event: Event) {
    console.log(event);
    // works in device not in browser

  }

  movedSignatureA(event: Event) {
    // works in device not in browser
  }

  clearPadSignatureA() {
    this.signaturePad1.clear();
  }

  savePadSignatureA() {
    const base64Data = this.signaturePad1.toDataURL();
    this.signatureImg1 = base64Data;
    this.constat.vehiculeInformationA.signature=this.signatureImg1;
  }
  startDrawingSignatureB(event: Event) {
    console.log(event);
    // works in device not in browser

  }

  movedSignatureB(event: Event) {
    // works in device not in browser
  }

  clearPadSignatureB() {
    this.signaturePad2.clear();
  }

  savePadSignatureB() {
    const base64Data = this.signaturePad2.toDataURL();
    this.signatureImg2 = base64Data;
    this.constat.vehiculeInformationB.signature=this.signatureImg2;
  }
  //** */
  async configureAccount(){
    const alert = await this.alertController.create({
      header: 'Veuillez entrer vos renseignements',
      buttons: [{
        text:'Confirmer',
        handler:data=>{
          this.user.firstname=data[0];
          this.user.lastname=data[1];
          this.user.username=data[2];
          this.user.email=data[3];
          console.log(this.user);
          this.serviceUser.updateuser(this.user).subscribe((data)=>{
            console.log(data);
            this.serviceAuth.logout();
          })
        }
      }],
      inputs: [
        {
          placeholder: 'Firstname',
          value:this.user.firstname
          
        },
        {
          placeholder: 'Lastname',
          value:this.user.lastname
          
        },
        {
          placeholder: 'Username',
          value:this.user.username
          
        },
        {
          placeholder: 'Email',
          value:this.user.email
          
        },
        
        
      ],
      
    });
   // 
    await alert.present();
    
  }
  //** */


  //**MAP */
  
}
