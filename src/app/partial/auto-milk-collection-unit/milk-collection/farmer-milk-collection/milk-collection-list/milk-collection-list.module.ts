import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MilkCollectionListRoutingModule } from './milk-collection-list-routing.module';
import { MilkCollectionListComponent } from './milk-collection-list.component';


@NgModule({
  declarations: [
    MilkCollectionListComponent
  ],
  imports: [
    CommonModule,
    MilkCollectionListRoutingModule
  ]
})
export class MilkCollectionListModule { }
