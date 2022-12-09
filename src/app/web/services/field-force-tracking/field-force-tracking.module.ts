import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldForceTrackingRoutingModule } from './field-force-tracking-routing.module';
import { FieldForceTrackingComponent } from './field-force-tracking.component';


@NgModule({
  declarations: [
    FieldForceTrackingComponent
  ],
  imports: [
    CommonModule,
    FieldForceTrackingRoutingModule
  ]
})
export class FieldForceTrackingModule { }
