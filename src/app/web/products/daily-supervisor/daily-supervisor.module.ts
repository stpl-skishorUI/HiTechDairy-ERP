import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailySupervisorRoutingModule } from './daily-supervisor-routing.module';
import { DailySupervisorComponent } from './daily-supervisor.component';


@NgModule({
  declarations: [
    DailySupervisorComponent
  ],
  imports: [
    CommonModule,
    DailySupervisorRoutingModule
  ]
})
export class DailySupervisorModule { }
