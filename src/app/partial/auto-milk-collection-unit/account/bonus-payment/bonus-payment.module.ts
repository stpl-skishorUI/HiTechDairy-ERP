import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BonusPaymentRoutingModule } from './bonus-payment-routing.module';
import { BonusPaymentComponent } from './bonus-payment.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    BonusPaymentComponent
  ],
  imports: [
    CommonModule,
    BonusPaymentRoutingModule,
    MaterialModule
  ]
})
export class BonusPaymentModule { }
