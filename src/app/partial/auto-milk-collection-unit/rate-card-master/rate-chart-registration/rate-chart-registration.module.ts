import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RateChartRegistrationRoutingModule } from './rate-chart-registration-routing.module';
import { RateChartRegistrationComponent } from './rate-chart-registration.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';
import { RateChartListComponent } from './rate-chart-list/rate-chart-list.component';

@NgModule({
  declarations: [
    RateChartRegistrationComponent,
    RateChartListComponent
  ],
  imports: [
    CommonModule,
    RateChartRegistrationRoutingModule,
    MaterialModule
  ]
})
export class RateChartRegistrationModule { }
