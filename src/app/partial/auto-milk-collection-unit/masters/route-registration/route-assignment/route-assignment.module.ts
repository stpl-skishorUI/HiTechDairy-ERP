import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteAssignmentRoutingModule } from './route-assignment-routing.module';
import { RouteAssignmentComponent } from './route-assignment.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    RouteAssignmentComponent
  ],
  imports: [
    CommonModule,
    RouteAssignmentRoutingModule,
    MaterialModule
  ]
})
export class RouteAssignmentModule { }
