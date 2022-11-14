import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvanceSummaryReportComponent } from './advance-summary-report.component';

const routes: Routes = [{ path: '', component: AdvanceSummaryReportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvanceSummaryReportRoutingModule { }
