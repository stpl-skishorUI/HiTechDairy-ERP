import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MilkPurchaseBillSummaryReportComponent } from './milk-purchase-bill-summary-report.component';

const routes: Routes = [{ path: '', component: MilkPurchaseBillSummaryReportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MilkPurchaseBillSummaryReportRoutingModule { }
