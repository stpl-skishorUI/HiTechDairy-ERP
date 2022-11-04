import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRegisterRoutingModule } from './organization-register-routing.module';
import { OrganizationRegisterComponent } from './organization-register.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';

@NgModule({
  declarations: [
    OrganizationRegisterComponent
  ],
  imports: [
    CommonModule,
    OrganizationRegisterRoutingModule,
    MaterialModule
  ]
})
export class OrganizationRegisterModule { }
