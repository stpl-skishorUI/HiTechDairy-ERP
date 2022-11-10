import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesInvoiceRoutingModule } from './sales-invoice-routing.module';
import { SalesInvoiceComponent } from './sales-invoice.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    SalesInvoiceComponent
  ],
  imports: [
    CommonModule,
    SalesInvoiceRoutingModule,
    MaterialModule
  ]
})
export class SalesInvoiceModule { }
