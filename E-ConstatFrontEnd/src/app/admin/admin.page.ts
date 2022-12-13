import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Constat } from '../model/constat';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';
import { ConstatService } from '../services/constat.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  listConstat:Constat[]=[];
  user:User=new User();
  search:string="";

  constructor(private alertController: AlertController,private serviceUser:UserService, private serviceConstat:ConstatService,private serviceAuth:AuthService,private router:Router) { }
  username:string=localStorage.getItem('username');
  ngOnInit() {
    this.serviceConstat.getAllConstat().subscribe((data)=>this.listConstat=data);
    this.serviceUser.getuser(this.username).subscribe((data)=>this.user=data);
  }
  deleteConstat(id:number){
    this.serviceConstat.deleteConstatById(id).subscribe(()=>{
      this.serviceConstat.getAllConstat().subscribe((data)=>this.listConstat=data);
    })
  }
  openDashboard(){
    console.log("open dashboard");
  }
  openConstatList(){
    console.log("open constat list");
  }
  logoutAction(){
    this.serviceAuth.logout();
  }
  openConstatDetails(id:number){
    this.router.navigateByUrl("/constatdetail/"+id);
  }
  async configureAccount(){
    const alert = await this.alertController.create({
      header: 'Please enter your info',
      buttons: [{
        text:'Confirm',
        handler:data=>{
          this.user.firstname=data[0];
          this.user.lastname=data[1];
          this.user.username=data[2];
          this.user.email=data[3];
          console.log(this.user);
          this.serviceUser.updateuser(this.user).subscribe((data)=>{
            console.log(data);
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

    await alert.present();
  }
  searchConstat(){
    console.log(this.search)
    if(this.search!=""){
      this.listConstat=this.listConstat.filter(res=>{
        if(res.accidentSite.toLocaleLowerCase().match(this.search.toLocaleLowerCase())){
          return true;
        }
        
        else{
          return false;
        }
      });

    }
    else{
      this.serviceConstat.getAllConstat().subscribe((data)=>this.listConstat=data);
    }
  }
  
}
