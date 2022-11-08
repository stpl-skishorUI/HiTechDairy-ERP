import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdditionsDeductionsTypeRoutingModule } from './additions-deductions-type-routing.module';
import { AdditionsDeductionsTypeComponent } from './additions-deductions-type.component';
import { ChargeRegistrationComponent } from './charge-registration/charge-registration.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    AdditionsDeductionsTypeComponent,
    ChargeRegistrationComponent
  ],
  imports: [
    CommonModule,
    AdditionsDeductionsTypeRoutingModule,
    MaterialModule
  ]
})
export class AdditionsDeductionsTypeModule { }
