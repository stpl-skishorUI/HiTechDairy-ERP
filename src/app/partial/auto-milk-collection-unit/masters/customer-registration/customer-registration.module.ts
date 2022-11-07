import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRegistrationRoutingModule } from './customer-registration-routing.module';
import { CustomerRegistrationComponent } from './customer-registration.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    CustomerRegistrationComponent
  ],
  imports: [
    CommonModule,
    CustomerRegistrationRoutingModule,
    MaterialModule
  ]
})
export class CustomerRegistrationModule { }
