import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RateCardRoutingModule } from './rate-card-routing.module';
import { RateCardComponent } from './rate-card.component';


@NgModule({
  declarations: [
    RateCardComponent
  ],
  imports: [
    CommonModule,
    RateCardRoutingModule
  ]
})
export class RateCardModule { }
