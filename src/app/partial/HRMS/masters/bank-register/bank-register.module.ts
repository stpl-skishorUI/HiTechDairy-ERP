import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankRegisterRoutingModule } from './bank-register-routing.module';
import { BankRegisterComponent } from './bank-register.component';


@NgModule({
  declarations: [
    BankRegisterComponent
  ],
  imports: [
    CommonModule,
    BankRegisterRoutingModule
  ]
})
export class BankRegisterModule { }
