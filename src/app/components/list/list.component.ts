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

  constructor(private sauktiniuService:SauktiniaiService) { }

  ngOnInit(): void {
    this.sauktiniuSarasas=this.sauktiniuService.sauktiniai;
  }

}
