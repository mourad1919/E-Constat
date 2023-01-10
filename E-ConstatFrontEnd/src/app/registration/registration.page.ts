import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.css'],
})
export class RegistrationPage implements OnInit {
  user:User=new User();
  constructor(private userService:UserService,private router:Router,private alertController:AlertController) { }
  err:number=0;
  ngOnInit() {
  }
  async signupfail(){
    if(this.err==1){
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'Sign up Fail',
        message: 'Email or username already exist',
        buttons: ['OK'],
      });
  
      await alert.present();
    }
    
  }
  addUser(){
    console.log(this.user);
    this.userService.addUser(this.user).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/login']);
    },(err)=>{ 
      this.err=1;
      this.signupfail();
    });
    /*this.userService.assignRoleToUser(this.user.username).subscribe(()=>{
      this.router.navigate(['/login']); 
    })*/
  }
}
