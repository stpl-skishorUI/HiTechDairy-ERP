import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IrregularCustomerListReportComponent } from './irregular-customer-list-report.component';

const routes: Routes = [{ path: '', component: IrregularCustomerListReportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IrregularCustomerListReportRoutingModule { }
