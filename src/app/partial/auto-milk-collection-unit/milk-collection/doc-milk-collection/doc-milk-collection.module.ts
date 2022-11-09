import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocMilkCollectionRoutingModule } from './doc-milk-collection-routing.module';
import { DocMilkCollectionComponent } from './doc-milk-collection.component';


@NgModule({
  declarations: [
    DocMilkCollectionComponent
  ],
  imports: [
    CommonModule,
    DocMilkCollectionRoutingModule
  ]
})
export class DocMilkCollectionModule { }
