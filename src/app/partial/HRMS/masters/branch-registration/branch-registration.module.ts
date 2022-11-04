import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchRegistrationRoutingModule } from './branch-registration-routing.module';
import { BranchRegistrationComponent } from './branch-registration.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';

@NgModule({
  declarations: [
    BranchRegistrationComponent
  ],
  imports: [
    CommonModule,
    BranchRegistrationRoutingModule,
    MaterialModule
  ]
})
export class BranchRegistrationModule { }
