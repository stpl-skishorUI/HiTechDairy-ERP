import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankRegisterRoutingModule } from './bank-register-routing.module';
import { BankRegisterComponent } from './bank-register.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';

@NgModule({
  declarations: [
    BankRegisterComponent
  ],
  imports: [
    CommonModule,
    BankRegisterRoutingModule,
    MaterialModule
  ]
})
export class BankRegisterModule { }
