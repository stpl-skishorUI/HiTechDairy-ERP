import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleTrackingSystemRoutingModule } from './vehicle-tracking-system-routing.module';
import { VehicleTrackingSystemComponent } from './vehicle-tracking-system.component';


@NgModule({
  declarations: [
    VehicleTrackingSystemComponent
  ],
  imports: [
    CommonModule,
    VehicleTrackingSystemRoutingModule
  ]
})
export class VehicleTrackingSystemModule { }
