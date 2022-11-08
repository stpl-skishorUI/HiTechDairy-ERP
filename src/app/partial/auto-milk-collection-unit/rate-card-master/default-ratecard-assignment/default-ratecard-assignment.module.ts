import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRatecardAssignmentRoutingModule } from './default-ratecard-assignment-routing.module';
import { DefaultRatecardAssignmentComponent } from './default-ratecard-assignment.component';
import { RateCardCategoryComponent } from './rate-card-category/rate-card-category.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    DefaultRatecardAssignmentComponent,
    RateCardCategoryComponent
  ],
  imports: [
    CommonModule,
    DefaultRatecardAssignmentRoutingModule,
    MaterialModule
  ]
})
export class DefaultRatecardAssignmentModule { }
