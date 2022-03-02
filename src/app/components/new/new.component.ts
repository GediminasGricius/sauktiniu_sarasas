import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(form){
    console.log("SUBMIT FORM");
    console.log(form);

  }

}
