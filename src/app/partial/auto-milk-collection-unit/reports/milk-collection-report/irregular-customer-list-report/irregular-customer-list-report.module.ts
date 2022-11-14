import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IrregularCustomerListReportRoutingModule } from './irregular-customer-list-report-routing.module';
import { IrregularCustomerListReportComponent } from './irregular-customer-list-report.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    IrregularCustomerListReportComponent
  ],
  imports: [
    CommonModule,
    IrregularCustomerListReportRoutingModule,
    MaterialModule
  ]
})
export class IrregularCustomerListReportModule { }
