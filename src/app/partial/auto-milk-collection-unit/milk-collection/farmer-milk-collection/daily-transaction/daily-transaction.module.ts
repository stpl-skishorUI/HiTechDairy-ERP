import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyTransactionRoutingModule } from './daily-transaction-routing.module';
import { DailyTransactionComponent } from './daily-transaction.component';


@NgModule({
  declarations: [
    DailyTransactionComponent
  ],
  imports: [
    CommonModule,
    DailyTransactionRoutingModule
  ]
})
export class DailyTransactionModule { }
