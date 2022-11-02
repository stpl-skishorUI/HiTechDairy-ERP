import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParameterMasterRoutingModule } from './parameter-master-routing.module';
import { ParameterMasterComponent } from './parameter-master.component';


@NgModule({
  declarations: [
    ParameterMasterComponent
  ],
  imports: [
    CommonModule,
    ParameterMasterRoutingModule
  ]
})
export class ParameterMasterModule { }
