import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupPaymentComponent } from './group-payment.component';

const routes: Routes = [{ path: '', component: GroupPaymentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupPaymentRoutingModule { }
