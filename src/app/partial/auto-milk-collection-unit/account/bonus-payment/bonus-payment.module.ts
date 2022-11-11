import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BonusPaymentRoutingModule } from './bonus-payment-routing.module';
import { BonusPaymentComponent } from './bonus-payment.component';


@NgModule({
  declarations: [
    BonusPaymentComponent
  ],
  imports: [
    CommonModule,
    BonusPaymentRoutingModule
  ]
})
export class BonusPaymentModule { }
