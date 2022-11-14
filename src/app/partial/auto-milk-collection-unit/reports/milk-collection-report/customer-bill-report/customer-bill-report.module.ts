import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerBillReportRoutingModule } from './customer-bill-report-routing.module';
import { CustomerBillReportComponent } from './customer-bill-report.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    CustomerBillReportComponent
  ],
  imports: [
    CommonModule,
    CustomerBillReportRoutingModule,
    MaterialModule
  ]
})
export class CustomerBillReportModule { }
