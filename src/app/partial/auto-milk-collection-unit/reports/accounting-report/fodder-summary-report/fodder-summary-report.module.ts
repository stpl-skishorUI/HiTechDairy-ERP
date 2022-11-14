import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FodderSummaryReportRoutingModule } from './fodder-summary-report-routing.module';
import { FodderSummaryReportComponent } from './fodder-summary-report.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    FodderSummaryReportComponent
  ],
  imports: [
    CommonModule,
    FodderSummaryReportRoutingModule,
    MaterialModule
  ]
})
export class FodderSummaryReportModule { }
