import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MilkCollectionReportRoutingModule } from './milk-collection-report-routing.module';
import { MilkCollectionReportComponent } from './milk-collection-report.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    MilkCollectionReportComponent
  ],
  imports: [
    CommonModule,
    MilkCollectionReportRoutingModule,
    MaterialModule
  ]
})
export class MilkCollectionReportModule { }
