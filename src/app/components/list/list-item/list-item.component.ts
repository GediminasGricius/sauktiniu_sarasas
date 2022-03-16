import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SauktiniaiService } from 'src/app/services/sauktiniai.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() sauktinis;
  @Output() afterDelete=new EventEmitter();

  constructor(private sauktiniuService:SauktiniaiService) { }

  ngOnInit(): void {}

  public delete(id){
    this.sauktiniuService.deleteSauktinis(id).subscribe((result)=>{
      this.afterDelete.emit();
    });
  }

}
