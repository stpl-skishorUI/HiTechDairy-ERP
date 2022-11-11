import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupPaymentRoutingModule } from './group-payment-routing.module';
import { GroupPaymentComponent } from './group-payment.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    GroupPaymentComponent
  ],
  imports: [
    CommonModule,
    GroupPaymentRoutingModule,
    MaterialModule
  ]
})
export class GroupPaymentModule { }
