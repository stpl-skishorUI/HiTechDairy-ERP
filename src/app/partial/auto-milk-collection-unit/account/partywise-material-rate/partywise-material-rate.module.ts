import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartywiseMaterialRateRoutingModule } from './partywise-material-rate-routing.module';
import { PartywiseMaterialRateComponent } from './partywise-material-rate.component';


@NgModule({
  declarations: [
    PartywiseMaterialRateComponent
  ],
  imports: [
    CommonModule,
    PartywiseMaterialRateRoutingModule
  ]
})
export class PartywiseMaterialRateModule { }
