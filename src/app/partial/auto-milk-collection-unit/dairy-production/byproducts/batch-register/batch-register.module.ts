import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatchRegisterRoutingModule } from './batch-register-routing.module';
import { BatchRegisterComponent } from './batch-register.component';


@NgModule({
  declarations: [
    BatchRegisterComponent
  ],
  imports: [
    CommonModule,
    BatchRegisterRoutingModule
  ]
})
export class BatchRegisterModule { }
