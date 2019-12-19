import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './cmp1/details/details.component';

import { RegisterComponent } from './cmp2/register/register.component';
import { HomeComponent } from './cmp2/home/home.component';

import { InputboxComponent } from './inputbox/inputbox.component';

import { ListEmployeeComponent } from './employees/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { ButtoncmpComponent } from './buttoncmp/buttoncmp.component';
import { MainDropdownComponent } from './main-dropdown/main-dropdown.component';
import { SidebardropdownComponent } from './sidebardropdown/sidebardropdown.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sidebardropdown',
    pathMatch: 'full'
  },
  {
    path: 'sidebardropdown',
    component: SidebardropdownComponent
  },
  {
    path: 'button',
    component: ButtoncmpComponent
  },
  {
    path: 'dropdown',
    component: MainDropdownComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'inputbox',
    component: InputboxComponent
  },
  {
    path: 'list',
    component: ListEmployeeComponent
  },
  {
    path: 'create',
    component: CreateEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
