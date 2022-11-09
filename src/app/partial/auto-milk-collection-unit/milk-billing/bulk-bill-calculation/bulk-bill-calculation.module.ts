import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BulkBillCalculationRoutingModule } from './bulk-bill-calculation-routing.module';
import { BulkBillCalculationComponent } from './bulk-bill-calculation.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    BulkBillCalculationComponent
  ],
  imports: [
    CommonModule,
    BulkBillCalculationRoutingModule,
    MaterialModule
  ]
})
export class BulkBillCalculationModule { }
