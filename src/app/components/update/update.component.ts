import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  //Pasiimame esamą kelią
  constructor(private route:ActivatedRoute, private sauktiniaiService:SauktiniaiService) { }

  
  ngOnInit(): void {
    //Paimkime sauktinio kurį norime užkrauti ID
    this.id=this.route.snapshot.params['id'];

    //Paprašykime serviso kad jis užkrautu šauktinį ir mums atsiūstų Observable
    this.sauktiniaiService.getSauktinis(this.id).subscribe((sauktinis)=>{
      this.name=sauktinis.name;
      this.surname=sauktinis.surname;
      this.email=sauktinis.email;
      this.phone=sauktinis.phone;
    });

  }

  public onSubmit(form){

  }

}
