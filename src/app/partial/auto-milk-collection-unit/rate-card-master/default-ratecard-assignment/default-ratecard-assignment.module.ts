import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRatecardAssignmentRoutingModule } from './default-ratecard-assignment-routing.module';
import { DefaultRatecardAssignmentComponent } from './default-ratecard-assignment.component';


@NgModule({
  declarations: [
    DefaultRatecardAssignmentComponent
  ],
  imports: [
    CommonModule,
    DefaultRatecardAssignmentRoutingModule
  ]
})
export class DefaultRatecardAssignmentModule { }
