import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GodownStockReportComponent } from './godown-stock-report.component';

const routes: Routes = [{ path: '', component: GodownStockReportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GodownStockReportRoutingModule { }
