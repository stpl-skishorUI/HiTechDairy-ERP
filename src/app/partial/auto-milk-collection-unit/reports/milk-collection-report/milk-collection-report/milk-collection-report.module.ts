import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MilkCollectionReportRoutingModule } from './milk-collection-report-routing.module';
import { MilkCollectionReportComponent } from './milk-collection-report.component';


@NgModule({
  declarations: [
    MilkCollectionReportComponent
  ],
  imports: [
    CommonModule,
    MilkCollectionReportRoutingModule
  ]
})
export class MilkCollectionReportModule { }
