import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRegisterRoutingModule } from './organization-register-routing.module';
import { OrganizationRegisterComponent } from './organization-register.component';


@NgModule({
  declarations: [
    OrganizationRegisterComponent
  ],
  imports: [
    CommonModule,
    OrganizationRegisterRoutingModule
  ]
})
export class OrganizationRegisterModule { }
