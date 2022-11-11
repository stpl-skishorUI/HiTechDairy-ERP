import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartywiseMaterialRateRoutingModule } from './partywise-material-rate-routing.module';
import { PartywiseMaterialRateComponent } from './partywise-material-rate.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    PartywiseMaterialRateComponent
  ],
  imports: [
    CommonModule,
    PartywiseMaterialRateRoutingModule,
    MaterialModule
  ]
})
export class PartywiseMaterialRateModule { }
