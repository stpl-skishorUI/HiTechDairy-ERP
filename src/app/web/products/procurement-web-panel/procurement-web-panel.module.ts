import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcurementWebPanelRoutingModule } from './procurement-web-panel-routing.module';
import { ProcurementWebPanelComponent } from './procurement-web-panel.component';


@NgModule({
  declarations: [
    ProcurementWebPanelComponent
  ],
  imports: [
    CommonModule,
    ProcurementWebPanelRoutingModule
  ]
})
export class ProcurementWebPanelModule { }
