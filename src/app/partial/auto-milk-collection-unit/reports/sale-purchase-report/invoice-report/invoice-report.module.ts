import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceReportRoutingModule } from './invoice-report-routing.module';
import { InvoiceReportComponent } from './invoice-report.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    InvoiceReportComponent
  ],
  imports: [
    CommonModule,
    InvoiceReportRoutingModule,
    MaterialModule
  ]
})
export class InvoiceReportModule { }
