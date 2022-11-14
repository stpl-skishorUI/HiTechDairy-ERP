import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceReportRoutingModule } from './invoice-report-routing.module';
import { InvoiceReportComponent } from './invoice-report.component';


@NgModule({
  declarations: [
    InvoiceReportComponent
  ],
  imports: [
    CommonModule,
    InvoiceReportRoutingModule
  ]
})
export class InvoiceReportModule { }
