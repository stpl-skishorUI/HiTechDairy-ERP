import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GodownStockReportRoutingModule } from './godown-stock-report-routing.module';
import { GodownStockReportComponent } from './godown-stock-report.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    GodownStockReportComponent
  ],
  imports: [
    CommonModule,
    GodownStockReportRoutingModule,
    MaterialModule
  ]
})
export class GodownStockReportModule { }
