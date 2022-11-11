import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpeningBalanceRoutingModule } from './opening-balance-routing.module';
import { OpeningBalanceComponent } from './opening-balance.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    OpeningBalanceComponent
  ],
  imports: [
    CommonModule,
    OpeningBalanceRoutingModule,
    MaterialModule
  ]
})
export class OpeningBalanceModule { }
