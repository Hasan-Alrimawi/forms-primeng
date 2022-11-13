import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from "primeng/button";
import { AccordionModule } from 'primeng/accordion';
import { FormComponent } from './components/form/form.component';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms"
import {InputSwitchModule} from 'primeng/inputswitch';
import {KnobModule} from 'primeng/knob';
import {RatingModule} from 'primeng/rating';
import {SliderModule} from 'primeng/slider';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    FormsModule,
    InputSwitchModule,
    KnobModule,
    RatingModule,
    SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
