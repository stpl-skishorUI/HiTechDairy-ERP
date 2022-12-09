import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesDistributionRoutingModule } from './sales-distribution-routing.module';
import { SalesDistributionComponent } from './sales-distribution.component';


@NgModule({
  declarations: [
    SalesDistributionComponent
  ],
  imports: [
    CommonModule,
    SalesDistributionRoutingModule
  ]
})
export class SalesDistributionModule { }
