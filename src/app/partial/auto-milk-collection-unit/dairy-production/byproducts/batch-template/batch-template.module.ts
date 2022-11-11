import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatchTemplateRoutingModule } from './batch-template-routing.module';
import { BatchTemplateComponent } from './batch-template.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    BatchTemplateComponent
  ],
  imports: [
    CommonModule,
    BatchTemplateRoutingModule,
    MaterialModule
  ]
})
export class BatchTemplateModule { }
