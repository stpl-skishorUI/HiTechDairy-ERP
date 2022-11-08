import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteRegistrationRoutingModule } from './route-registration-routing.module';
import { RouteRegistrationComponent } from './route-registration.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    RouteRegistrationComponent
  ],
  imports: [
    CommonModule,
    RouteRegistrationRoutingModule,
    MaterialModule
  ]
})
export class RouteRegistrationModule { }
