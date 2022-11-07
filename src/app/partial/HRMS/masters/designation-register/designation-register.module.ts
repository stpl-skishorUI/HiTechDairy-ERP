import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignationRegisterRoutingModule } from './designation-register-routing.module';
import { DesignationRegisterComponent } from './designation-register.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';

@NgModule({
  declarations: [
    DesignationRegisterComponent
  ],
  imports: [
    CommonModule,
    DesignationRegisterRoutingModule,
    MaterialModule
  ]
})
export class DesignationRegisterModule { }
