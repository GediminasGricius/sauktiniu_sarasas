import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
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

  private checkLogin=(response)=>{
    if (response.status==401){
      this.user.logOut();
    }
  
    return throwError( ()=> new Error("Nesate prisijungę"))
  };

 

  constructor(private http:HttpClient, private user:UserService) { }


  public getSauktiniai(){   
    //Vykdoma užklausa ir grąžinamas observable
    return this.http.get<Sauktinis[]>("http://laiskutis.lt/sauktiniai/")
      .pipe(catchError(this.checkLogin));
    
  }

  public addSauktinis(id, name, surname, email, phone, age){
    return this.http.post("http://laiskutis.lt/sauktiniai/", {
      name:name,
      surname:surname,
      email:email,
      phone:phone,
      age:age
    })
      .pipe(catchError(this.checkLogin));
    
  }
  //Metodas kuris paima iš HTTP vieną šauktinį pagal id ir gražina Observable
  public getSauktinis(id){
    return this.http.get<Sauktinis>("http://laiskutis.lt/sauktiniai/"+id)
      .pipe(catchError(this.checkLogin));;
  }

  //Išsiųs duomenis į Spring tam kad šauktinis būtų atnaujintas
  public updateSauktinis(id, name, surname, email, phone, age){
    return this.http.patch("http://laiskutis.lt/sauktiniai/"+id, {
      id:id,
      name:name,
      surname:surname,
      email:email,
      phone:phone,
      age:age
    })
      .pipe(catchError(this.checkLogin));;
  }

  public deleteSauktinis(id){
    return this.http.delete("http://laiskutis.lt/sauktiniai/"+id)
      .pipe(catchError(this.checkLogin));;
  }

  public isEmailAvailable(email, id?){
    if (id==null){
      return this.http.get<boolean>("http://laiskutis.lt/sauktiniai/email/"+email)
        .pipe(catchError(this.checkLogin));;
    }else{
      return this.http.get<boolean>("http://laiskutis.lt/sauktiniai/"+id+"/email/"+email)
        .pipe(catchError(this.checkLogin));;
    }

  }

}
