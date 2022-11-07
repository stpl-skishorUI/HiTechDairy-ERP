import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRegistrationRoutingModule } from './department-registration-routing.module';
import { DepartmentRegistrationComponent } from './department-registration.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';

@NgModule({
  declarations: [
    DepartmentRegistrationComponent
  ],
  imports: [
    CommonModule,
    DepartmentRegistrationRoutingModule,
    MaterialModule
  ]
})
export class DepartmentRegistrationModule { }
