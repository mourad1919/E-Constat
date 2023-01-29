import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constat } from '../model/constat';
import { VehiculeInformation } from '../model/vehicule-information';

@Injectable({
  providedIn: 'root'
})
export class ConstatService {
  host:string="http://192.168.1.4:8081/constat";
  //host:string ="http://localhost:8081/constat";
  constructor(private http:HttpClient) { }
  sendEmail(to:string,id:number){
    return this.http.get<any>(this.host+"/sendConstatdetailsEmail/"+to+"/"+id);
  }
  addConstat(c:Constat):Observable<number>{
    return this.http.post<number>(this.host+"/saveconstat",c);
  }
  getAllConstat():Observable<Constat[]>{
    return this.http.get<Constat[]>(this.host+"/getallconstats");
  }
  getLastIdVehiculeInformation(){
    return this.http.get<number>(this.host+"/getLastIdVehiculeInformation");
  }
  saveVehiculeInforamtion(vehiculeInforamtion:VehiculeInformation){
    return this.http.post<any>(this.host+"/saveVehiculeInforamtion",vehiculeInforamtion);
  }
  saveConstatWithVehiculeInformationA(constat:Constat,id:number):Observable<number>{
    return this.http.post<number>(this.host+"/saveConstatWithVehiculeInformationA/"+id,constat)
  }
  deleteConstatById(id:number){
    return this.http.delete(this.host+"/deleteconstat/"+id);
  }
  getSizeOfConstatByAccidentSite(site:string):Observable<number>{
    return this.http.get<number>(this.host+"/getSizeOfConstatByAccidentSite/"+site);
  }
  getConstatByid(id:number):Observable<Constat>{
    return this.http.get<Constat>(this.host+"/getconstat/"+id);
  }
  
}
