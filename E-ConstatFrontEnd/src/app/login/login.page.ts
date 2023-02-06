import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPage implements OnInit {
  user:User=new User();
  err:number=0;
  constructor(private loadingCtrl: LoadingController,private authService:AuthService,private router:Router,private alertController:AlertController) { }

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

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Connexion en cours...',
    });

    loading.present();
  }
 async onLoggedin()
  {
    const loading =  await this.loadingCtrl.create({
      message: 'Connexion en cours...',
    });

    loading.present();
    this.authService.login(this.user.username,this.user.password).subscribe((data)=> {
      
      let jwToken = data.body.id_token;
      this.authService.saveToken(jwToken || '{}');
      loading.dismiss();
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
