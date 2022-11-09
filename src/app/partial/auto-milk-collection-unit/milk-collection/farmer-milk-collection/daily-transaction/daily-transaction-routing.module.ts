import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyTransactionComponent } from './daily-transaction.component';

const routes: Routes = [{ path: '', component: DailyTransactionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyTransactionRoutingModule { }
