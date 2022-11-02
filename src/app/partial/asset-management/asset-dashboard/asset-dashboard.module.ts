import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetDashboardRoutingModule } from './asset-dashboard-routing.module';
import { AssetDashboardComponent } from './asset-dashboard.component';


@NgModule({
  declarations: [
    AssetDashboardComponent
  ],
  imports: [
    CommonModule,
    AssetDashboardRoutingModule
  ]
})
export class AssetDashboardModule { }
