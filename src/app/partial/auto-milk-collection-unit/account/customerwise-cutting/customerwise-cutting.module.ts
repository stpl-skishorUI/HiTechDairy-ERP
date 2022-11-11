import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerwiseCuttingRoutingModule } from './customerwise-cutting-routing.module';
import { CustomerwiseCuttingComponent } from './customerwise-cutting.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    CustomerwiseCuttingComponent
  ],
  imports: [
    CommonModule,
    CustomerwiseCuttingRoutingModule,
    MaterialModule
  ]
})
export class CustomerwiseCuttingModule { }
