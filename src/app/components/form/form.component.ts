import { Component, DoCheck, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  error: string = "";
  styleMarital: string = "";
  styleName: string = "";
  styleDate: string = "";
  styleMajor: string = "";

  form: FormGroup = new FormGroup({
    'name': new FormControl(""),
    'date': new FormControl(""),
    'marital status': new FormControl(""),
    'major': new FormControl(""),
    'shawerma': new FormControl(""),
    'mansaf': new FormControl(""),
    'servicesRating': new FormControl(""),
    'pizzaSlider': new FormControl("")
  });

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  validate() {
    this.styleMarital = "";
    this.styleName = "";
    this.styleDate = "";
    this.styleMajor = "";
    this.error = "";
    const today = new Date();
    let valid: boolean = true;
    if (this.form.get('name')?.value == "") {
      this.error += "Please add a name - \n";
      valid = false;
      this.styleName = "ng-dirty ng-invalid";
    }
    if (Date.parse(this.form.get('date')?.value) > Date.parse(today.toString()) || this.form.get('date')?.value == "") {
      this.error += "Please select a possible date of birth - \n"
      valid = false;
      this.styleDate = "ng-dirty ng-invalid";
    }
    if (this.form.get('major')?.value == "") {
      this.error += "Please select a major - \n";
      valid = false;
      this.styleMajor = "ng-dirty ng-invalid";
    }
    if (this.form.get("marital status")?.value == "") {
      this.error += "Please choose your marital status - \n";
      valid = false;
      this.styleMarital = "ng-dirty ng-invalid";
    }

    if (!valid) {
      this.addErrorToast();
      this.error = "";
    }
    else {
      this.styleMarital = "";
      this.styleName = "";
      this.styleDate = "";
      this.styleMajor = "";
      this.error = "";
      if (this.form.get("shawerma")?.value == "") {
        this.form.patchValue({ shawerma: true });
      }
      if(this.form.get("mansaf")?.value == ""){
        this.form.patchValue({ mansaf: 0 });
      }
      if(this.form.get("servicesRating")?.value == ""){
        this.form.patchValue({ servicesRating: 0 });
      }
      if(this.form.get("pizzaSlider")?.value == ""){
        this.form.patchValue({ pizzaSlider: 0 });
      }

      this.addSuccess();
      console.log(this.form.value);
      this.form.reset();
    }
  }


  addErrorToast() {
    this.messageService.add({ severity: 'error', summary: 'Invalid input', detail: this.error });
  }

  addSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Thanks for your Feedback', detail: "Your data has been saved" });
  }


}

interface controlStyle {
  'name': string,
  'class': string
}