import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MilkBagProductionRoutingModule } from './milk-bag-production-routing.module';
import { MilkBagProductionComponent } from './milk-bag-production.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    MilkBagProductionComponent
  ],
  imports: [
    CommonModule,
    MilkBagProductionRoutingModule,
    MaterialModule
  ]
})
export class MilkBagProductionModule { }
