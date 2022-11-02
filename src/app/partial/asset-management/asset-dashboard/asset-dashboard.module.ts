import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetDashboardRoutingModule } from './asset-dashboard-routing.module';
import { AssetsDashboardComponent } from './asset-dashboard.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';

@NgModule({
  declarations: [
    AssetsDashboardComponent
  ],
  imports: [
    CommonModule,
    AssetDashboardRoutingModule,
    MaterialModule
  ]
})
export class AssetDashboardModule { }
