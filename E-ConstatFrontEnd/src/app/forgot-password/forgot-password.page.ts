import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.css'],
})
export class ForgotPasswordPage implements OnInit {
  username:string="";
  constructor(private userService:UserService) { }

  ngOnInit() {
  }
  forgotPassword(){
    this.userService.forgotPasswor(this.username).subscribe(()=>{
    });
  }
}
