import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatchProcessRoutingModule } from './batch-process-routing.module';
import { BatchProcessComponent } from './batch-process.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    BatchProcessComponent
  ],
  imports: [
    CommonModule,
    BatchProcessRoutingModule,
    MaterialModule
  ]
})
export class BatchProcessModule { }
