import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MilkPurchaseBillComponent } from './milk-purchase-bill.component';

const routes: Routes = [{ path: '', component: MilkPurchaseBillComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MilkPurchaseBillRoutingModule { }
