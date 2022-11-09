import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BulkBillCalculationRoutingModule } from './bulk-bill-calculation-routing.module';
import { BulkBillCalculationComponent } from './bulk-bill-calculation.component';


@NgModule({
  declarations: [
    BulkBillCalculationComponent
  ],
  imports: [
    CommonModule,
    BulkBillCalculationRoutingModule
  ]
})
export class BulkBillCalculationModule { }
