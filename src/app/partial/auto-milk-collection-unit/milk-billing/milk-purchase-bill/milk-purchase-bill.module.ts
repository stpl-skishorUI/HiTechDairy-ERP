import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MilkPurchaseBillRoutingModule } from './milk-purchase-bill-routing.module';
import { MilkPurchaseBillComponent } from './milk-purchase-bill.component';


@NgModule({
  declarations: [
    MilkPurchaseBillComponent
  ],
  imports: [
    CommonModule,
    MilkPurchaseBillRoutingModule
  ]
})
export class MilkPurchaseBillModule { }
