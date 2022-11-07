import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRepairIssueReturnRoutingModule } from './item-repair-issue-return-routing.module';
import { ItemRepairIssueReturnComponent } from './item-repair-issue-return.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';
import { ItemRepairIssueReturnFormComponent } from './item-repair-issue-return-form/item-repair-issue-return-form.component';


@NgModule({
  declarations: [
    ItemRepairIssueReturnComponent,
    ItemRepairIssueReturnFormComponent
  ],
  imports: [
    CommonModule,
    ItemRepairIssueReturnRoutingModule,
    MaterialModule
  ]
})
export class ItemRepairIssueReturnModule { }
