import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrmsDashboardRoutingModule } from './hrms-dashboard-routing.module';
import { HrmsDashboardComponent } from './hrms-dashboard.component';


@NgModule({
  declarations: [
    HrmsDashboardComponent
  ],
  imports: [
    CommonModule,
    HrmsDashboardRoutingModule
  ]
})
export class HrmsDashboardModule { }
