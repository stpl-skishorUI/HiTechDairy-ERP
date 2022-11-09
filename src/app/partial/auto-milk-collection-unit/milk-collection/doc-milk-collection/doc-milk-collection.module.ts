import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocMilkCollectionRoutingModule } from './doc-milk-collection-routing.module';
import { DocMilkCollectionComponent } from './doc-milk-collection.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';

@NgModule({
  declarations: [
    DocMilkCollectionComponent
  ],
  imports: [
    CommonModule,
    DocMilkCollectionRoutingModule,
    MaterialModule
  ]
})
export class DocMilkCollectionModule { }
