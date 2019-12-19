import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      contactPreference: 'Email',
      email: 'mark@pragimtech.com',
      gender:'male',
      dateOfBirth: new Date('10/25/1988'),
      department: 'IT',
      isActive: true
    },
    {
      id: 2,
      name: 'Mary',
      contactPreference: 'Phone',
      phoneNumber: 2345978640,
      dateOfBirth: new Date('11/20/1979'),
      gender:'female',
      department: 'HR',
      isActive: true
    },
    
    {
      id: 3,
      name: 'John',
      contactPreference: 'Phone',
      phoneNumber: 5432978640,
      gender:'male',
      dateOfBirth: new Date('3/25/1976'),
      department: 'IT',
      isActive: false
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
