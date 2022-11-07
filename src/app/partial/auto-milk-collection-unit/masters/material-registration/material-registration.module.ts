import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MaterialRegistrationRoutingModule } from './material-registration-routing.module';
import { MaterialRegistrationComponent } from './material-registration.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';

@NgModule({
  declarations: [
    MaterialRegistrationComponent
  ],
  imports: [
    CommonModule,
    MaterialRegistrationRoutingModule,
    MaterialModule,
    MatCheckboxModule
  ]
})
export class MaterialRegistrationModule { }
