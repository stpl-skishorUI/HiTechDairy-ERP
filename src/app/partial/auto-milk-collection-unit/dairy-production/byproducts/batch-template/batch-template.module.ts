import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatchTemplateRoutingModule } from './batch-template-routing.module';
import { BatchTemplateComponent } from './batch-template.component';


@NgModule({
  declarations: [
    BatchTemplateComponent
  ],
  imports: [
    CommonModule,
    BatchTemplateRoutingModule
  ]
})
export class BatchTemplateModule { }
