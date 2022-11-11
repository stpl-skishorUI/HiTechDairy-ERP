import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MilkBagProductionRoutingModule } from './milk-bag-production-routing.module';
import { MilkBagProductionComponent } from './milk-bag-production.component';


@NgModule({
  declarations: [
    MilkBagProductionComponent
  ],
  imports: [
    CommonModule,
    MilkBagProductionRoutingModule
  ]
})
export class MilkBagProductionModule { }
