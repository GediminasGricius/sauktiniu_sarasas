import { Component, OnInit } from '@angular/core';
import { Sauktinis } from 'src/app/models/sauktinis.model';
import { SauktiniaiService } from 'src/app/services/sauktiniai.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public sauktiniuSarasas:Sauktinis[]=[];
  public isLoading=true;
  public isError=false;

  constructor(private sauktiniuService:SauktiniaiService) { }

  ngOnInit(): void {
    //Kviečiame serviso metodą getSauktiniai, metodas gražins Observable 
    //(t.y. objektą prie kurio galėsime prisiskirti f-jas kurios bus vykdomos tuomet kai bus gauti duomenys)
    this.isLoading=true;
    
    this.sauktiniuService.getSauktiniai()  
    
    //Su metodu subscribe galime priskirti f-ją kuri bus įvykdyta tuomet kai duomenys bus gauti
    .subscribe(
      // Lamda išraiška su kintamuoju response kuriame bus talpinami parsiusti duomenys
      (response)=>{
        //Parsiustus duomenis prisiskiriame komponento kitnamajam sauktiniuSarasas kurį atvaizduojame
        this.sauktiniuSarasas=response;
        console.log("Atvaizdavau duomenis");
        this.isLoading=false;
      },
      (response)=>{
        this.isError=true;  
      }
    );

    console.log("Pabaigiau darba");
    
  }

}
