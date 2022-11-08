import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdditionsDeductionsChargesRoutingModule } from './additions-deductions-charges-routing.module';
import { AdditionsDeductionsChargesComponent } from './additions-deductions-charges.component';
import { CollectionTypeComponent } from './collection-type/collection-type.component';
import { ChargeCategoryComponent } from './charge-category/charge-category.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    AdditionsDeductionsChargesComponent,
    CollectionTypeComponent,
    ChargeCategoryComponent
  ],
  imports: [
    CommonModule,
    AdditionsDeductionsChargesRoutingModule,
    MaterialModule
  ]
})
export class AdditionsDeductionsChargesModule { }
