import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyPrintReportComponent } from './daily-print-report.component';

const routes: Routes = [{ path: '', component: DailyPrintReportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyPrintReportRoutingModule { }
