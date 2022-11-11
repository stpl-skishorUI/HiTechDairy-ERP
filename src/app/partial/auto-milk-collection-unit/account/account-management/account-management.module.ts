import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountManagementRoutingModule } from './account-management-routing.module';
import { AccountManagementComponent } from './account-management.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    AccountManagementComponent
  ],
  imports: [
    CommonModule,
    AccountManagementRoutingModule,
    MaterialModule
  ]
})
export class AccountManagementModule { }
