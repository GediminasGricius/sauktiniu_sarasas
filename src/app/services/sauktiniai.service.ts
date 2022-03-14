import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sauktinis } from '../models/sauktinis.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SauktiniaiService {

  public sauktiniai: Sauktinis[]=[
    /*  {id:1, name:"Jonas", surname:"Jonaitis", email:"jonas@gmail.com", phone:"+370670123"},
      {id:2, name:"Petras", surname:"Petraitis", email:"petras@gmail.com", phone:"+78545645456"}
      */
    ];

 

  constructor(private http:HttpClient, private user:UserService) { }


  public getSauktiniai(){   
    //Vykdoma užklausa ir grąžinamas observable
    return this.http.get<Sauktinis[]>("http://localhost:8080/sauktiniai/", {headers:this.user.getHeaders()} );
    
  }

  public addSauktinis(id, name, surname, email, phone, age){
    return this.http.post("http://localhost:8080/sauktiniai/", {
      name:name,
      surname:surname,
      email:email,
      phone:phone,
      age:age
    },{headers:this.user.getHeaders()});
    
  }
  //Metodas kuris paima iš HTTP vieną šauktinį pagal id ir gražina Observable
  public getSauktinis(id){
    return this.http.get<Sauktinis>("http://localhost:8080/sauktiniai/"+id, {headers:this.user.getHeaders()});
  }

  //Išsiųs duomenis į Spring tam kad šauktinis būtų atnaujintas
  public updateSauktinis(id, name, surname, email, phone, age){
    return this.http.patch("http://localhost:8080/sauktiniai/"+id, {
      id:id,
      name:name,
      surname:surname,
      email:email,
      phone:phone,
      age:age
    },{headers:this.user.getHeaders()});
  }

  public deleteSauktinis(id){
    return this.http.delete("http://localhost:8080/sauktiniai/"+id, {headers:this.user.getHeaders()});
  }

  public isEmailAvailable(email, id?){
    if (id==null){
      return this.http.get<boolean>("http://localhost:8080/sauktiniai/email/"+email, {headers:this.user.getHeaders()});
    }else{
      return this.http.get<boolean>("http://localhost:8080/sauktiniai/"+id+"/email/"+email, {headers:this.user.getHeaders()});
    }

  }

}
