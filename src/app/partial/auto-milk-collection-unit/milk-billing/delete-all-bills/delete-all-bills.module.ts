import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteAllBillsRoutingModule } from './delete-all-bills-routing.module';
import { DeleteAllBillsComponent } from './delete-all-bills.component';


@NgModule({
  declarations: [
    DeleteAllBillsComponent
  ],
  imports: [
    CommonModule,
    DeleteAllBillsRoutingModule
  ]
})
export class DeleteAllBillsModule { }
