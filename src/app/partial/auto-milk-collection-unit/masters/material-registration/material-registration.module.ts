import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRegistrationRoutingModule } from './material-registration-routing.module';
import { MaterialRegistrationComponent } from './material-registration.component';


@NgModule({
  declarations: [
    MaterialRegistrationComponent
  ],
  imports: [
    CommonModule,
    MaterialRegistrationRoutingModule
  ]
})
export class MaterialRegistrationModule { }
