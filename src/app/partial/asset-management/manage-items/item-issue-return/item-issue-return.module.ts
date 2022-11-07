import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemIssueReturnRoutingModule } from './item-issue-return-routing.module';
import { ItemIssueReturnComponent } from './item-issue-return.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';
import { ItemIssueReturnFormComponent } from './item-issue-return-form/item-issue-return-form.component';


@NgModule({
  declarations: [
    ItemIssueReturnComponent,
    ItemIssueReturnFormComponent
  ],
  imports: [
    CommonModule,
    ItemIssueReturnRoutingModule,
    MaterialModule
  ]
})
export class ItemIssueReturnModule { }
