import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EProcessorRoutingModule } from './e-processor-routing.module';
import { EProcessorComponent } from './e-processor.component';


@NgModule({
  declarations: [
    EProcessorComponent
  ],
  imports: [
    CommonModule,
    EProcessorRoutingModule
  ]
})
export class EProcessorModule { }
