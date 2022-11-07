import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VillageRegistrationRoutingModule } from './village-registration-routing.module';
import { VillageRegistrationComponent } from './village-registration.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';

@NgModule({
  declarations: [
    VillageRegistrationComponent
  ],
  imports: [
    CommonModule,
    VillageRegistrationRoutingModule,
    MaterialModule
  ]
})
export class VillageRegistrationModule { }
