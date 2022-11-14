import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyPrintReportRoutingModule } from './daily-print-report-routing.module';
import { DailyPrintReportComponent } from './daily-print-report.component';


@NgModule({
  declarations: [
    DailyPrintReportComponent
  ],
  imports: [
    CommonModule,
    DailyPrintReportRoutingModule
  ]
})
export class DailyPrintReportModule { }
