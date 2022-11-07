import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyAccountRegistrationRoutingModule } from './company-account-registration-routing.module';
import { CompanyAccountRegistrationComponent } from './company-account-registration.component';


@NgModule({
  declarations: [
    CompanyAccountRegistrationComponent
  ],
  imports: [
    CommonModule,
    CompanyAccountRegistrationRoutingModule
  ]
})
export class CompanyAccountRegistrationModule { }
