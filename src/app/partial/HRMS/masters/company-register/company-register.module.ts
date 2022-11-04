import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRegisterRoutingModule } from './company-register-routing.module';
import { CompanyRegisterComponent } from './company-register.component';


@NgModule({
  declarations: [
    CompanyRegisterComponent
  ],
  imports: [
    CommonModule,
    CompanyRegisterRoutingModule
  ]
})
export class CompanyRegisterModule { }
