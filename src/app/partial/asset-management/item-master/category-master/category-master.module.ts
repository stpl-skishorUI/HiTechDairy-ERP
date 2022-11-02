import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryMasterRoutingModule } from './category-master-routing.module';
import { CategoryMasterComponent } from './category-master.component';


@NgModule({
  declarations: [
    CategoryMasterComponent
  ],
  imports: [
    CommonModule,
    CategoryMasterRoutingModule
  ]
})
export class CategoryMasterModule { }
