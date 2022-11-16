import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRegisterRoutingModule } from './employee-register-routing.module';
import { EmployeeRegisterComponent } from './employee-register.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    EmployeeRegisterComponent
  ],
  imports: [
    CommonModule,
    EmployeeRegisterRoutingModule,
    MaterialModule
  ]
})
export class EmployeeRegisterModule { }
