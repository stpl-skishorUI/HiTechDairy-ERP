import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesInvoiceRoutingModule } from './sales-invoice-routing.module';
import { SalesInvoiceComponent } from './sales-invoice.component';


@NgModule({
  declarations: [
    SalesInvoiceComponent
  ],
  imports: [
    CommonModule,
    SalesInvoiceRoutingModule
  ]
})
export class SalesInvoiceModule { }
