import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupMasterRoutingModule } from './group-master-routing.module';
import { GroupMasterComponent } from './group-master.component';


@NgModule({
  declarations: [
    GroupMasterComponent
  ],
  imports: [
    CommonModule,
    GroupMasterRoutingModule
  ]
})
export class GroupMasterModule { }
