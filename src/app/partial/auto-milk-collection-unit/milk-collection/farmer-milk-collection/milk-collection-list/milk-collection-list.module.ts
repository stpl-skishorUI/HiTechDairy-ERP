import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MilkCollectionListRoutingModule } from './milk-collection-list-routing.module';
import { MilkCollectionListComponent } from './milk-collection-list.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';

@NgModule({
  declarations: [
    MilkCollectionListComponent
  ],
  imports: [
    CommonModule,
    MilkCollectionListRoutingModule,
    MaterialModule
  ]
})
export class MilkCollectionListModule { }
