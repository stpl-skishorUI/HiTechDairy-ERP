import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRegisterRoutingModule } from './company-register-routing.module';
import { CompanyRegisterComponent } from './company-register.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';

@NgModule({
  declarations: [
    CompanyRegisterComponent
  ],
  imports: [
    CommonModule,
    CompanyRegisterRoutingModule,
    MaterialModule
  ]
})
export class CompanyRegisterModule { }
