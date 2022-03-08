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
  constructor(private sauktiniuService:SauktiniaiService, private router:Router) { }

  ngOnInit(): void {
  }

  public onSubmit(form){
    let values=form.form.value;
    this.sauktiniuService.addSauktinis(null,values.name,values.surname,values.email,values.phone, values.age).subscribe(
      (response)=>{
        this.router.navigate(["/"]);
      }
    );
    
  }

}
