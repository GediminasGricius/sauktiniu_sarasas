import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public user:User;

  constructor(public userService:UserService) { 
    
  }

  ngOnInit(): void {
    this.user=this.userService.user;
    this.userService.userUpdated.subscribe((user:User)=>{
      this.user=user;
    });
  }

  onLogoutClick(){
    console.log("Atsijungiu");
    this.userService.logOut();
  }

}
