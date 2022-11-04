import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchRegistrationRoutingModule } from './branch-registration-routing.module';
import { BranchRegistrationComponent } from './branch-registration.component';


@NgModule({
  declarations: [
    BranchRegistrationComponent
  ],
  imports: [
    CommonModule,
    BranchRegistrationRoutingModule
  ]
})
export class BranchRegistrationModule { }
