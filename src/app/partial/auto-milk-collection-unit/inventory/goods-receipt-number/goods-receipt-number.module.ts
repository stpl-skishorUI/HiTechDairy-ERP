import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodsReceiptNumberRoutingModule } from './goods-receipt-number-routing.module';
import { GoodsReceiptNumberComponent } from './goods-receipt-number.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    GoodsReceiptNumberComponent
  ],
  imports: [
    CommonModule,
    GoodsReceiptNumberRoutingModule,
    MaterialModule
  ]
})
export class GoodsReceiptNumberModule { }
