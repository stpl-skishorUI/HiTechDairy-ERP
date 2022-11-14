import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvanceSummaryReportRoutingModule } from './advance-summary-report-routing.module';
import { AdvanceSummaryReportComponent } from './advance-summary-report.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    AdvanceSummaryReportComponent
  ],
  imports: [
    CommonModule,
    AdvanceSummaryReportRoutingModule,
    MaterialModule
  ]
})
export class AdvanceSummaryReportModule { }
