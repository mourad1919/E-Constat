import { HttpClient, HttpHandler, HttpHeaders, HttpParams, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from "../model/user";
import { Observable } from "rxjs";
import { map } from "rxjs/operators"; 
import { RoleToUser } from "../model/roletouser";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers :any;

  host:string =environment.host+"user";
  constructor(private http:HttpClient) {

    this.headers = new Headers({
       'Content-Type': 'application/json',
       'Authorization': `Bearer ` + localStorage.getItem('access_token')
     })

     console.log(this.headers);
   
   
 
   }
  addUser(user:User):Observable<User>{
    console.log(user.password)
    return this.http.post<User>(this.host+"/saveuserwithroleuser/"+"ROLE_USER",user);
  }
  assignRoleToUser(username:string){
    let roleToUser:RoleToUser=new RoleToUser();
    roleToUser.username=username;
    roleToUser.rolename="ROLE_USER";
    return this.http.post(this.host+"/saveuser",roleToUser);
  }
  forgotPassword(username:string){
    return this.http.post(this.host+"/forgot_password/"+username,null);
  }
  resetPassword(password:string,token:string):Observable<string>{
    return this.http.put<string>(this.host+"/reset_password/"+token+"/"+password,null);
  }
  getuser(username:string):Observable<User>{
    return this.http.get<User>(this.host+"/getuser/"+username,{headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ` + localStorage.getItem('access_token')
    }});
  }
  updateuser(user:User):Observable<User>{
    return this.http.put<User>(this.host+"/updateuser",user);
  }

    
}
