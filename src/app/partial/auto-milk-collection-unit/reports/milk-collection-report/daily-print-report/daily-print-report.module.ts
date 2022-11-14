import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyPrintReportRoutingModule } from './daily-print-report-routing.module';
import { DailyPrintReportComponent } from './daily-print-report.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    DailyPrintReportComponent
  ],
  imports: [
    CommonModule,
    DailyPrintReportRoutingModule,
    MaterialModule
  ]
})
export class DailyPrintReportModule { }
