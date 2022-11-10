import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodsReceiptNumberRoutingModule } from './goods-receipt-number-routing.module';
import { GoodsReceiptNumberComponent } from './goods-receipt-number.component';


@NgModule({
  declarations: [
    GoodsReceiptNumberComponent
  ],
  imports: [
    CommonModule,
    GoodsReceiptNumberRoutingModule
  ]
})
export class GoodsReceiptNumberModule { }
