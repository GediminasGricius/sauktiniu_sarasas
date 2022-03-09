import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SauktiniaiService } from 'src/app/services/sauktiniai.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  public name=null;
  public email=null;
  public isEmailValid=true;
  constructor(private sauktiniuService:SauktiniaiService, private router:Router) { }

  ngOnInit(): void {
  }

  public onSubmit(form){
    let values=form.form.value;
    this.sauktiniuService.isEmailAvailable(this.email).subscribe(
      (response)=>{
        if (response==true){
          this.sauktiniuService.addSauktinis(null,values.name,values.surname,values.email,values.phone, values.age).subscribe(
            (response)=>{
              this.router.navigate(["/"]);
            }
          );
        }else{
          this.isEmailValid=false;
        }
      }
    );
  }

  public onEmailUpdate(){
    this.sauktiniuService.isEmailAvailable(this.email).subscribe(
      (response)=>{
        this.isEmailValid=response;
        console.log( this.isEmailValid);
      }
    );

  }

}
