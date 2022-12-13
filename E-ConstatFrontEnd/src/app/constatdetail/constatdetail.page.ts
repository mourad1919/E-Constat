import { Constat } from '../model/constat';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConstatService } from '../services/constat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculeInformation } from '../model/vehicule-information';
import { InsurenceCompanyInformation } from '../model/insurance-company-information';
import {PDFGenerator,PDFGeneratorOptions} from '@ionic-native/pdf-generator/ngx'
import { DriverInformation } from '../model/driver-information';
import { InsuredInformation } from '../model/insured-inforamation';
import { Vehicule } from '../model/vehicule';
@Component({
  selector: 'app-constatdetail',
  templateUrl: './constatdetail.page.html',
  styleUrls: ['./constatdetail.page.scss'],
})
export class ConstatdetailPage implements OnInit {
  constat:Constat=new Constat();
  
  idConstat:number;
  content: string;
  constructor(private router:Router,private serviceConstat:ConstatService,private route:ActivatedRoute,private pdf:PDFGenerator) {
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
      fileName: 'Constat'+this.constat.id+'.pdf'
    };
    this.pdf.fromData(this.content, options)
      .then((base64) => {
        console.log('OK', base64);
      }).catch((error) => {
        console.log('error', error);
      });

  }
  ngOnInit() {
    this.constat.sketch="";
    this.constat=new Constat();
    
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
        this.idConstat=this.route.snapshot.params['id'];
    this.serviceConstat.getConstatByid(this.idConstat).subscribe(c=>{
      this.constat=c;

    });
  }

}
