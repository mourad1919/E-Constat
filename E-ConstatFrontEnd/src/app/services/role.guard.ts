import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService:AuthService,private router:Router){}
  canActivate(){
    let role=localStorage.getItem("role");
    if(role=="ROLE_ADMIN"){
      return true;
    }
    this.router.navigate(['tabs']);
    return false;
  }
  
}
