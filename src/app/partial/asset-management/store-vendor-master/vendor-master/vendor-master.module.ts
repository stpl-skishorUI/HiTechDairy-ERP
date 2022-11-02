import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorMasterRoutingModule } from './vendor-master-routing.module';
import { VendorMasterComponent } from './vendor-master.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';

@NgModule({
  declarations: [
    VendorMasterComponent
  ],
  imports: [
    CommonModule,
    VendorMasterRoutingModule,
    MaterialModule
  ]
})
export class VendorMasterModule { }
