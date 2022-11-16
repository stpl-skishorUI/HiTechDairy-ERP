import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRegisterRoutingModule } from './employee-register-routing.module';
import { EmployeeRegisterComponent } from './employee-register.component';


@NgModule({
  declarations: [
    EmployeeRegisterComponent
  ],
  imports: [
    CommonModule,
    EmployeeRegisterRoutingModule
  ]
})
export class EmployeeRegisterModule { }
