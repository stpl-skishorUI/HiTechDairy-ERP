import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupMasterRoutingModule } from './group-master-routing.module';
import { GroupMasterComponent } from './group-master.component';
import {MaterialModule} from 'src/app/shared/angularMaterialModule/material.module';

@NgModule({
  declarations: [
    GroupMasterComponent
  ],
  imports: [
    CommonModule,
    GroupMasterRoutingModule,
    MaterialModule
  ]
})
export class GroupMasterModule { }
