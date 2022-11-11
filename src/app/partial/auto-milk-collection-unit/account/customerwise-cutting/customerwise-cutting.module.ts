import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerwiseCuttingRoutingModule } from './customerwise-cutting-routing.module';
import { CustomerwiseCuttingComponent } from './customerwise-cutting.component';


@NgModule({
  declarations: [
    CustomerwiseCuttingComponent
  ],
  imports: [
    CommonModule,
    CustomerwiseCuttingRoutingModule
  ]
})
export class CustomerwiseCuttingModule { }
