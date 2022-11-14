import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FodderSummaryReportComponent } from './fodder-summary-report.component';

const routes: Routes = [{ path: '', component: FodderSummaryReportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FodderSummaryReportRoutingModule { }
