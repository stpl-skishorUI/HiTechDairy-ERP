import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatchRegisterRoutingModule } from './batch-register-routing.module';
import { BatchRegisterComponent } from './batch-register.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    BatchRegisterComponent
  ],
  imports: [
    CommonModule,
    BatchRegisterRoutingModule,
    MaterialModule
  ]
})
export class BatchRegisterModule { }
