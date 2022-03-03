import { Injectable } from '@angular/core';
import { Sauktinis } from '../models/sauktinis.model';

@Injectable({
  providedIn: 'root'
})
export class SauktiniaiService {

  public sauktiniai: Sauktinis[]=[
      {id:1, name:"Jonas", surname:"Jonaitis", email:"jonas@gmail.com", phone:"+370670123"},
      {id:2, name:"Petras", surname:"Petraitis", email:"petras@gmail.com", phone:"+78545645456"}
    ];

  constructor() { }


  public getSauktiniai(){
    console.log("Uzkraunu sauktinis");
  }

  public addSauktinis(id, name, surname, email, phone){
    console.log("Pridedu sauktini kurio vardas: "+name);
    this.sauktiniai.push(new Sauktinis(id, name, surname, email, phone));
  }


}
