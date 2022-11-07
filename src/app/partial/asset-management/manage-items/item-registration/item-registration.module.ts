import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRegistrationRoutingModule } from './item-registration-routing.module';
import { ItemRegistrationComponent } from './item-registration.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';
import { ItemRegistrationFormComponent } from './item-registration-form/item-registration-form.component';


@NgModule({
  declarations: [
    ItemRegistrationComponent,
    ItemRegistrationFormComponent
  ],
  imports: [
    CommonModule,
    ItemRegistrationRoutingModule,
    MaterialModule
  ]
})
export class ItemRegistrationModule { }
