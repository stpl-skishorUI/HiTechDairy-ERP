import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GodownStockReportRoutingModule } from './godown-stock-report-routing.module';
import { GodownStockReportComponent } from './godown-stock-report.component';


@NgModule({
  declarations: [
    GodownStockReportComponent
  ],
  imports: [
    CommonModule,
    GodownStockReportRoutingModule
  ]
})
export class GodownStockReportModule { }
