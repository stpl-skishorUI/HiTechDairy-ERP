import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MilkPurchaseBillSummaryReportRoutingModule } from './milk-purchase-bill-summary-report-routing.module';
import { MilkPurchaseBillSummaryReportComponent } from './milk-purchase-bill-summary-report.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    MilkPurchaseBillSummaryReportComponent
  ],
  imports: [
    CommonModule,
    MilkPurchaseBillSummaryReportRoutingModule,
    MaterialModule
  ]
})
export class MilkPurchaseBillSummaryReportModule { }
