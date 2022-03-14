import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public username=null;
  public password=null;
  private loggedIn=false;

  private headers=new HttpHeaders({
    authorization: 'Basic '+   btoa('null:null')  
  });



  constructor(private router:Router) { }

  public logIn(username, password){
    this.username=username;
    this.password=password;
    this.headers=new HttpHeaders({
      authorization: 'Basic '+   btoa(username+":"+password)  
    });
    this.loggedIn=true;
  }

  public isLoggedIn(){
    return this.loggedIn;
  }

  public getHeaders(){
    return this.headers;
  }

  public logOut(){
    this.username=null;
    this.password=null;
    this.loggedIn=false;
    this.router.navigate(["/login"]);

  }


}
