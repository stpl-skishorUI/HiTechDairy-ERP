import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRatecardAssignmentRoutingModule } from './default-ratecard-assignment-routing.module';
import { DefaultRatecardAssignmentComponent } from './default-ratecard-assignment.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    DefaultRatecardAssignmentComponent
  ],
  imports: [
    CommonModule,
    DefaultRatecardAssignmentRoutingModule,
    MaterialModule
  ]
})
export class DefaultRatecardAssignmentModule { }
