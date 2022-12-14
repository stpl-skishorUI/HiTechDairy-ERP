import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyTransactionRoutingModule } from './daily-transaction-routing.module';
import { DailyTransactionComponent } from './daily-transaction.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';

@NgModule({
  declarations: [
    DailyTransactionComponent
  ],
  imports: [
    CommonModule,
    DailyTransactionRoutingModule,
    MaterialModule
  ]
})
export class DailyTransactionModule { }
