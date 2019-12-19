import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from 'src/app/models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  datePickerConfig: Partial<BsDatepickerConfig>;

    employee: Employee = {
      id: null,
      name: null,
      gender: null,
      contactPreference: null,
      phoneNumber: null,
      email: null,
      dateOfBirth: null,
      department: null,
      isActive: null
    };
  
  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];

  constructor() {
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      // showWeekNumbers: false,
      // minDate: new Date(2018, 0, 1),
      // maxDate: new Date(2018, 11, 31),
      dateInputFormat: 'DD/MM/YYYY'    
    });
  }

   
  ngOnInit() {
  }

  // saveEmployee(employeeForm: NgForm): void {
  //   console.log(employeeForm.value);
  // }

  saveEmployee(newEmployee: Employee): void {
    console.log(newEmployee);
  }
}
