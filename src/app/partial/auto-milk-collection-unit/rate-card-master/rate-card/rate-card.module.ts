import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RateCardRoutingModule } from './rate-card-routing.module';
import { RateCardComponent } from './rate-card.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';

@NgModule({
  declarations: [
    RateCardComponent
  ],
  imports: [
    CommonModule,
    RateCardRoutingModule,
    MaterialModule
  ]
})
export class RateCardModule { }
