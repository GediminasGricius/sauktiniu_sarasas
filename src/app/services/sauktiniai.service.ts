import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sauktinis } from '../models/sauktinis.model';

@Injectable({
  providedIn: 'root'
})
export class SauktiniaiService {

  public sauktiniai: Sauktinis[]=[
    /*  {id:1, name:"Jonas", surname:"Jonaitis", email:"jonas@gmail.com", phone:"+370670123"},
      {id:2, name:"Petras", surname:"Petraitis", email:"petras@gmail.com", phone:"+78545645456"}
      */
    ];

  constructor(private http:HttpClient) { }


  public getSauktiniai(){   
    //Vykdoma užklausa ir grąžinamas observable
    return this.http.get<Sauktinis[]>("http://localhost:8080/sauktiniai/");
    
  }

  public addSauktinis(id, name, surname, email, phone){
    return this.http.post("http://localhost:8080/sauktiniai/", {
      name:name,
      surname:surname,
      email:email,
      phone:phone
    });
    
  }


}
