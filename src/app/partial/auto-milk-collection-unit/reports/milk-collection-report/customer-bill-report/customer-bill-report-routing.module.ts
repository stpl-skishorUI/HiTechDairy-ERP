import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerBillReportComponent } from './customer-bill-report.component';

const routes: Routes = [{ path: '', component: CustomerBillReportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerBillReportRoutingModule { }
