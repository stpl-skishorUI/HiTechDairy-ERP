import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FodderSummaryReportRoutingModule } from './fodder-summary-report-routing.module';
import { FodderSummaryReportComponent } from './fodder-summary-report.component';


@NgModule({
  declarations: [
    FodderSummaryReportComponent
  ],
  imports: [
    CommonModule,
    FodderSummaryReportRoutingModule
  ]
})
export class FodderSummaryReportModule { }
