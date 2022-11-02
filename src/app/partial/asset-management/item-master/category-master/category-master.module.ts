import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryMasterRoutingModule } from './category-master-routing.module';
import { CategoryMasterComponent } from './category-master.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';

@NgModule({
  declarations: [
    CategoryMasterComponent
  ],
  imports: [
    CommonModule,
    CategoryMasterRoutingModule,
    MaterialModule
  ]
})
export class CategoryMasterModule { }
