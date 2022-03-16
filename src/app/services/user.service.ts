import { HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user:User=null;
  private loggedIn=false;

  public userUpdated=new EventEmitter<User>();

  constructor(private router:Router) {   }

  public logIn(username, password){
    this.user=new User(username, password);
    this.loggedIn=true;
    localStorage.setItem("user", btoa(JSON.stringify(this.user)));
    
    
    this.userUpdated.emit(this.user);
  }

  public autoLogin(){
    if (!localStorage.getItem("user")){
      return ;
    }
    
    const user:User=JSON.parse( atob(localStorage.getItem("user")));
    //Patikrinam ar vartoto duomenys yra Localstorage
    if (!user){
      return ;
    }
    //Patikrinam ar nesibaige userio laikas (1 val.)
    if (user.isExpired){
      localStorage.removeItem("user");
      return;
    }
    this.user=user;
    this.loggedIn=true;
  }

  public isLoggedIn(){
    return this.loggedIn;
  }

  public logOut(){
    this.user=null;
    this.loggedIn=false;
    localStorage.removeItem("user");
    this.router.navigate(["/login"]);
    this.userUpdated.emit(this.user);
  }
}
