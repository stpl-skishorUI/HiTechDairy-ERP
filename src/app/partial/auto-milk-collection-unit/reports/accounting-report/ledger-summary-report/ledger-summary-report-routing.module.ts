import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LedgerSummaryReportComponent } from './ledger-summary-report.component';

const routes: Routes = [{ path: '', component: LedgerSummaryReportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LedgerSummaryReportRoutingModule { }
