import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BonusPaymentComponent } from './bonus-payment.component';

const routes: Routes = [{ path: '', component: BonusPaymentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BonusPaymentRoutingModule { }
