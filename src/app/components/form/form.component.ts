import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  majors: string[] = ["Computer Engineering","Medicine" ,"Computer Science"];
  status: string[] = ["Single", "Married", "Complicated"];
  constructor() { }

  ngOnInit(): void {
    // this.majors = ["Computer Engineerin","Medicine" ,"Computer Science"];
    // this.status = ["Single", "Married", "Complicated"];
  }

}

