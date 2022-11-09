import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MilkPurchaseBillRoutingModule } from './milk-purchase-bill-routing.module';
import { MilkPurchaseBillComponent } from './milk-purchase-bill.component';
import { MaterialModule} from 'src/app/shared/angularMaterialModule/material.module';

@NgModule({
  declarations: [
    MilkPurchaseBillComponent
  ],
  imports: [
    CommonModule,
    MilkPurchaseBillRoutingModule,
    MaterialModule
  ]
})
export class MilkPurchaseBillModule { }
