import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user:User=new User();
  err:number=0;
  constructor(private authService:AuthService,private router:Router,private alertController:AlertController) { }

  ngOnInit() {
  }
  async loginfail(){
    if(this.err==1){
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'Login Fail',
        message: 'Incorrect username or password',
        buttons: ['OK'],
      });
  
      await alert.present();
    }
    
  }
  onLoggedin()
  {
    console.log(this.err)
    this.authService.login(this.user.username,this.user.password).subscribe((data)=> {
      let jwToken = data.body.access_token;
      this.authService.saveToken(jwToken || '{}');
      
      if(this.authService.isAdmin()){
        this.router.navigate(['/admin']); 
      }else {
        this.router.navigate(['/welcome']); 
      }            
    },(err)=>{ 
      this.err=1;
      this.loginfail();
    });
 }
 

}
