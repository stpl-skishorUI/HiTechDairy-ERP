import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeListRoutingModule } from './employee-list-routing.module';
import { EmployeeListComponent } from './employee-list.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    EmployeeListRoutingModule,
    MaterialModule
  ]
})
export class EmployeeListModule { }
