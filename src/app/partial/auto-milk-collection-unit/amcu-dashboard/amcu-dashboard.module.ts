import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmcuDashboardRoutingModule } from './amcu-dashboard-routing.module';
import { AmcuDashboardComponent } from './amcu-dashboard.component';


@NgModule({
  declarations: [
    AmcuDashboardComponent
  ],
  imports: [
    CommonModule,
    AmcuDashboardRoutingModule
  ]
})
export class AmcuDashboardModule { }
