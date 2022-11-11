import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupPaymentRoutingModule } from './group-payment-routing.module';
import { GroupPaymentComponent } from './group-payment.component';


@NgModule({
  declarations: [
    GroupPaymentComponent
  ],
  imports: [
    CommonModule,
    GroupPaymentRoutingModule
  ]
})
export class GroupPaymentModule { }
