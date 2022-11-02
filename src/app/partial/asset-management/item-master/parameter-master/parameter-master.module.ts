import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParameterMasterRoutingModule } from './parameter-master-routing.module';
import { ParameterMasterComponent } from './parameter-master.component';
import {MaterialModule} from 'src/app/shared/angularMaterialModule/material.module';

@NgModule({
  declarations: [
    ParameterMasterComponent
  ],
  imports: [
    CommonModule,
    ParameterMasterRoutingModule,
    MaterialModule
  ]
})
export class ParameterMasterModule { }
