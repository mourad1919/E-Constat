import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CheckauthGuard implements CanActivate {
  constructor(private authService:AuthService,private router:Router){}
  canActivate(){
    if(!this.authService.isLoggedIn()){
      return true;
    }
    let role=localStorage.getItem("role");
    if(role=="ROLE_ADMIN"){
      this.router.navigate(['admin']);
      return false;
    }
    else if(role=="ROLE_USER"){
      this.router.navigate(['tabs']);
      return false;
    }
    else{
      return false;
    }
    
  }
  
}
