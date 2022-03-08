import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sauktinis } from 'src/app/models/sauktinis.model';
import { SauktiniaiService } from 'src/app/services/sauktiniai.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public id;
  public name;
  public surname;
  public phone;
  public email;
  public age;
  public old=new Sauktinis();
  public error=null;
  public isNotFound=true;

  //Pasiimame esamą kelią
  constructor(private route:ActivatedRoute, private sauktiniaiService:SauktiniaiService, private router:Router) { }

  
  ngOnInit(): void {
    //Paimkime sauktinio kurį norime užkrauti ID
    this.id=this.route.snapshot.params['id'];

    //Paprašykime serviso kad jis užkrautu šauktinį ir mums atsiūstų Observable
    this.sauktiniaiService.getSauktinis(this.id).subscribe(
      {
        next:(sauktinis)=>{
          this.old=sauktinis;
          this.name=sauktinis.name;
          this.surname=sauktinis.surname;
          this.email=sauktinis.email;
          this.phone=sauktinis.phone;
          this.age=sauktinis.age;
          this.isNotFound=false;
        },
        error: (response)=>{
          console.log(response.error.name);
          this.isNotFound=true;
          this.error=response.error.name;
        }
      });

  }

  public onSubmit(form){
    this.sauktiniaiService.updateSauktinis(this.id,this.name,this.surname,this.email,this.phone, this.age).subscribe((sauktinis)=>{
      this.router.navigate(["/"]);
    }, (response)=>{
      this.error="Įvyko klaida atnaujinant įrašą serveryje. Bandykite dar kartą: <br>Klaidos tekstas: <strong>"+response.error.name+"</strong>";
    });

  }

}
