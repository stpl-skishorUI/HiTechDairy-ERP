import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseInvoiceRoutingModule } from './purchase-invoice-routing.module';
import { PurchaseInvoiceComponent } from './purchase-invoice.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    PurchaseInvoiceComponent
  ],
  imports: [
    CommonModule,
    PurchaseInvoiceRoutingModule,
    MaterialModule
  ]
})
export class PurchaseInvoiceModule { }
