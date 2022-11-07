import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteRegistrationRoutingModule } from './route-registration-routing.module';
import { RouteRegistrationComponent } from './route-registration.component';


@NgModule({
  declarations: [
    RouteRegistrationComponent
  ],
  imports: [
    CommonModule,
    RouteRegistrationRoutingModule
  ]
})
export class RouteRegistrationModule { }
