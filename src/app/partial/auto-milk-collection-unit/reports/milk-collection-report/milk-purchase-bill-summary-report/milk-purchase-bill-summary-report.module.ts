import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MilkPurchaseBillSummaryReportRoutingModule } from './milk-purchase-bill-summary-report-routing.module';
import { MilkPurchaseBillSummaryReportComponent } from './milk-purchase-bill-summary-report.component';


@NgModule({
  declarations: [
    MilkPurchaseBillSummaryReportComponent
  ],
  imports: [
    CommonModule,
    MilkPurchaseBillSummaryReportRoutingModule
  ]
})
export class MilkPurchaseBillSummaryReportModule { }
