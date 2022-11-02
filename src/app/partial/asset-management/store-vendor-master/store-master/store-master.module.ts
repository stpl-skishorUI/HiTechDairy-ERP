import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreMasterRoutingModule } from './store-master-routing.module';
import { StoreMasterComponent } from './store-master.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';

@NgModule({
  declarations: [
    StoreMasterComponent
  ],
  imports: [
    CommonModule,
    StoreMasterRoutingModule,
    MaterialModule
  ]
})
export class StoreMasterModule { }
