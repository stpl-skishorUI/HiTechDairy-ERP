import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteAllBillsRoutingModule } from './delete-all-bills-routing.module';
import { DeleteAllBillsComponent } from './delete-all-bills.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    DeleteAllBillsComponent
  ],
  imports: [
    CommonModule,
    DeleteAllBillsRoutingModule,
    MaterialModule
  ]
})
export class DeleteAllBillsModule { }
