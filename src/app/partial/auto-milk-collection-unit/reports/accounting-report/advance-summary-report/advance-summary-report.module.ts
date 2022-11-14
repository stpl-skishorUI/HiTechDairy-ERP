import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvanceSummaryReportRoutingModule } from './advance-summary-report-routing.module';
import { AdvanceSummaryReportComponent } from './advance-summary-report.component';


@NgModule({
  declarations: [
    AdvanceSummaryReportComponent
  ],
  imports: [
    CommonModule,
    AdvanceSummaryReportRoutingModule
  ]
})
export class AdvanceSummaryReportModule { }
