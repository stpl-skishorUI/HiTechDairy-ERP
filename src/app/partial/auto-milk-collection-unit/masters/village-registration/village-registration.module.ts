import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VillageRegistrationRoutingModule } from './village-registration-routing.module';
import { VillageRegistrationComponent } from './village-registration.component';


@NgModule({
  declarations: [
    VillageRegistrationComponent
  ],
  imports: [
    CommonModule,
    VillageRegistrationRoutingModule
  ]
})
export class VillageRegistrationModule { }
