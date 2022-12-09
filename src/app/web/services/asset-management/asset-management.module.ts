import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetManagementRoutingModule } from './asset-management-routing.module';
import { AssetManagementComponent } from './asset-management.component';


@NgModule({
  declarations: [
    AssetManagementComponent
  ],
  imports: [
    CommonModule,
    AssetManagementRoutingModule
  ]
})
export class AssetManagementModule { }
