import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PowerupappGuard implements CanActivate {
  constructor(private authService:AuthService,private router:Router){}
  canActivate(){
    let token= localStorage.getItem('access_token');
    let role= localStorage.getItem('role');
    if(!this.authService.isLoggedIn()){
      return true;
    }
    else{
      if(this.authService.isTokenExpired(token)){
        this.authService.logout();
        return true;
      }
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
  
}
