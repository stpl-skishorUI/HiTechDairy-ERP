import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IrregularCustomerListReportRoutingModule } from './irregular-customer-list-report-routing.module';
import { IrregularCustomerListReportComponent } from './irregular-customer-list-report.component';


@NgModule({
  declarations: [
    IrregularCustomerListReportComponent
  ],
  imports: [
    CommonModule,
    IrregularCustomerListReportRoutingModule
  ]
})
export class IrregularCustomerListReportModule { }
