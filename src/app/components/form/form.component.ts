import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [MessageService]
})
export class FormComponent implements OnInit {

  majors: string[] = ["Computer Engineering", "Medicine", "Computer Science"];
  status: string[] = ["Single", "Married", "Complicated"];

  form!: FormGroup;
  today: Date = new Date();
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'date': new FormControl(null, [Validators.required]),
      'marital status': new FormControl(null, [Validators.required]),
      'major': new FormControl(null, [Validators.required]),
      'shawerma': new FormControl(false, Validators.required),
      'mansaf': new FormControl("0", [Validators.min(0), Validators.max(100)]),
      'servicesRating': new FormControl(null, Validators.required),
      'pizzaSlider': new FormControl("0")
    });
  }

  validate() {
    if (!this.form.valid) {
      this.addErrorToast();
    }
    else {
      this.addSuccess();
      this.form.reset();
    }
  }


  addErrorToast() {
    this.messageService.add({ severity: 'error', summary: 'Invalid input', detail: "Please fill in all fields with correct entries" });
  }

  addSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Thanks for your Feedback', detail: "Your data has been saved" });
  }
  get servicesRating() { return this.form.get("servicesRating")!; }
}