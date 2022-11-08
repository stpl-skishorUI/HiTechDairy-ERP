import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdditionsDeductionsTypeRoutingModule } from './additions-deductions-type-routing.module';
import { AdditionsDeductionsTypeComponent } from './additions-deductions-type.component';
import { ChargeRegistrationComponent } from './charge-registration/charge-registration.component';


@NgModule({
  declarations: [
    AdditionsDeductionsTypeComponent,
    ChargeRegistrationComponent
  ],
  imports: [
    CommonModule,
    AdditionsDeductionsTypeRoutingModule
  ]
})
export class AdditionsDeductionsTypeModule { }
