import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
//import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { FormGroup, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './cmp1/details/details.component';
import { RegisterComponent } from './cmp2/register/register.component';
import { HomeComponent } from './cmp2/home/home.component';
import { InputboxComponent } from './inputbox/inputbox.component';
import { ListEmployeeComponent } from './employees/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { ButtoncmpComponent } from './buttoncmp/buttoncmp.component';
import { MainDropdownComponent } from './main-dropdown/main-dropdown.component';
import { SidebardropdownComponent } from './sidebardropdown/sidebardropdown.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { ChartsModule } from 'ng2-charts';
import { Chart } from 'chart.js';
import { GoogleChartComponent } from './google-chart/google-chart.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    RegisterComponent,
    HomeComponent,
    InputboxComponent,
    ListEmployeeComponent,
    CreateEmployeeComponent,
    ButtoncmpComponent,
    MainDropdownComponent,
    SidebardropdownComponent,
    DonutChartComponent,
    GoogleChartComponent,
    LandingpageComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    ChartsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    //SelectRequiredValidatorDirective
  ],
  //entryComponents: [ SelectRequiredValidatorDirective ],
  providers: [],
  bootstrap: [AppComponent],
  // exports: [
  //   SelectRequiredValidatorDirective
  // ]
})
export class AppModule { }


//>> import modules and NOT the components or services.
//>> declare components and NOT the modules or services.
//>> provide services and NOT components or modules.