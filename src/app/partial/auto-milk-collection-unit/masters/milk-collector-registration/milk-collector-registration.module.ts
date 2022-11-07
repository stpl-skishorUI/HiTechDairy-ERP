import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MilkCollectorRegistrationRoutingModule } from './milk-collector-registration-routing.module';
import { MilkCollectorRegistrationComponent } from './milk-collector-registration.component';


@NgModule({
  declarations: [
    MilkCollectorRegistrationComponent
  ],
  imports: [
    CommonModule,
    MilkCollectorRegistrationRoutingModule
  ]
})
export class MilkCollectorRegistrationModule { }
