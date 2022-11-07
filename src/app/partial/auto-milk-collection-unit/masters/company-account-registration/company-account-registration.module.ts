import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyAccountRegistrationRoutingModule } from './company-account-registration-routing.module';
import { CompanyAccountRegistrationComponent } from './company-account-registration.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';

@NgModule({
  declarations: [
    CompanyAccountRegistrationComponent
  ],
  imports: [
    CommonModule,
    CompanyAccountRegistrationRoutingModule,
    MaterialModule
  ]
})
export class CompanyAccountRegistrationModule { }
