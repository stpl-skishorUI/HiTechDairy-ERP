import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BulkBillCalculationComponent } from './bulk-bill-calculation.component';

const routes: Routes = [{ path: '', component: BulkBillCalculationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BulkBillCalculationRoutingModule { }
