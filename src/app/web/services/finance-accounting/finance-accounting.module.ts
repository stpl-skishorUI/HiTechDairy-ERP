import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceAccountingRoutingModule } from './finance-accounting-routing.module';
import { FinanceAccountingComponent } from './finance-accounting.component';


@NgModule({
  declarations: [
    FinanceAccountingComponent
  ],
  imports: [
    CommonModule,
    FinanceAccountingRoutingModule
  ]
})
export class FinanceAccountingModule { }
