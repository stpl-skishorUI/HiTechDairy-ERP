import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatchProcessRoutingModule } from './batch-process-routing.module';
import { BatchProcessComponent } from './batch-process.component';


@NgModule({
  declarations: [
    BatchProcessComponent
  ],
  imports: [
    CommonModule,
    BatchProcessRoutingModule
  ]
})
export class BatchProcessModule { }
