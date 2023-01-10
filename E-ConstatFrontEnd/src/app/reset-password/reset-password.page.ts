import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.css'],
})
export class ResetPasswordPage implements OnInit {
  password:string="";
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
    
  }
  updatePassword(){
    let token=this.router.url.substring(22);
    console.log(token);
    this.userService.resetPassword(this.password,token).subscribe((data)=>{
      console.log(data);
      this.router.navigateByUrl("/login");
    })
    this.router.navigateByUrl("/login");
  }
}
