import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LedgerSummaryReportRoutingModule } from './ledger-summary-report-routing.module';
import { LedgerSummaryReportComponent } from './ledger-summary-report.component';


@NgModule({
  declarations: [
    LedgerSummaryReportComponent
  ],
  imports: [
    CommonModule,
    LedgerSummaryReportRoutingModule
  ]
})
export class LedgerSummaryReportModule { }
