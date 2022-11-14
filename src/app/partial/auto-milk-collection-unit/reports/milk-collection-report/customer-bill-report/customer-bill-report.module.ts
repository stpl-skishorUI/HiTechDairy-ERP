import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerBillReportRoutingModule } from './customer-bill-report-routing.module';
import { CustomerBillReportComponent } from './customer-bill-report.component';


@NgModule({
  declarations: [
    CustomerBillReportComponent
  ],
  imports: [
    CommonModule,
    CustomerBillReportRoutingModule
  ]
})
export class CustomerBillReportModule { }
