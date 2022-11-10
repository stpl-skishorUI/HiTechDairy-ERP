import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockTransferRoutingModule } from './stock-transfer-routing.module';
import { StockTransferComponent } from './stock-transfer.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    StockTransferComponent
  ],
  imports: [
    CommonModule,
    StockTransferRoutingModule,
    MaterialModule
  ]
})
export class StockTransferModule { }
