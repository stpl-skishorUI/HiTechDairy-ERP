import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignationRegisterRoutingModule } from './designation-register-routing.module';
import { DesignationRegisterComponent } from './designation-register.component';


@NgModule({
  declarations: [
    DesignationRegisterComponent
  ],
  imports: [
    CommonModule,
    DesignationRegisterRoutingModule
  ]
})
export class DesignationRegisterModule { }
