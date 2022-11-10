import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseInvoiceRoutingModule } from './purchase-invoice-routing.module';
import { PurchaseInvoiceComponent } from './purchase-invoice.component';


@NgModule({
  declarations: [
    PurchaseInvoiceComponent
  ],
  imports: [
    CommonModule,
    PurchaseInvoiceRoutingModule
  ]
})
export class PurchaseInvoiceModule { }
