import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutomaticMilkCollectionUnitRoutingModule } from './automatic-milk-collection-unit-routing.module';
import { AutomaticMilkCollectionUnitComponent } from './automatic-milk-collection-unit.component';


@NgModule({
  declarations: [
    AutomaticMilkCollectionUnitComponent
  ],
  imports: [
    CommonModule,
    AutomaticMilkCollectionUnitRoutingModule
  ]
})
export class AutomaticMilkCollectionUnitModule { }
