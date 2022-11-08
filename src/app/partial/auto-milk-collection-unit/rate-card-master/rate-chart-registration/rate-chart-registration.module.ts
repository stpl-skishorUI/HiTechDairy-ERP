import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RateChartRegistrationRoutingModule } from './rate-chart-registration-routing.module';
import { RateChartRegistrationComponent } from './rate-chart-registration.component';


@NgModule({
  declarations: [
    RateChartRegistrationComponent
  ],
  imports: [
    CommonModule,
    RateChartRegistrationRoutingModule
  ]
})
export class RateChartRegistrationModule { }
