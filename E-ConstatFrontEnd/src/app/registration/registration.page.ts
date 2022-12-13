import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  user:User=new User();
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
  }
  addUser(){
    this.userService.addUser(this.user).subscribe((data)=>{
      console.log(data);
    });
    this.userService.assignRoleToUser(this.user.username).subscribe(()=>{
      this.router.navigate(['/login']); 
    })
  }
}
