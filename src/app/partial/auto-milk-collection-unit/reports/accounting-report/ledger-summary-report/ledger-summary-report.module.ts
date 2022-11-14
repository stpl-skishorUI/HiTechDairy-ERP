import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LedgerSummaryReportRoutingModule } from './ledger-summary-report-routing.module';
import { LedgerSummaryReportComponent } from './ledger-summary-report.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    LedgerSummaryReportComponent
  ],
  imports: [
    CommonModule,
    LedgerSummaryReportRoutingModule,
    MaterialModule
  ]
})
export class LedgerSummaryReportModule { }
