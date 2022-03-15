import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public user:UserService) { }

  ngOnInit(): void {
  }

  onLogoutClick(){
    console.log("Atsijungiu");
    this.user.logOut();
  }

}
