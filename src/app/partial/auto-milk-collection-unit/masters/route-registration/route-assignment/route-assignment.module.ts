import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteAssignmentRoutingModule } from './route-assignment-routing.module';
import { RouteAssignmentComponent } from './route-assignment.component';


@NgModule({
  declarations: [
    RouteAssignmentComponent
  ],
  imports: [
    CommonModule,
    RouteAssignmentRoutingModule
  ]
})
export class RouteAssignmentModule { }
