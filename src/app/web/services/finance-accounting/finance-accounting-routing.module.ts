import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceAccountingComponent } from './finance-accounting.component';

const routes: Routes = [{ path: '', component: FinanceAccountingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceAccountingRoutingModule { }
