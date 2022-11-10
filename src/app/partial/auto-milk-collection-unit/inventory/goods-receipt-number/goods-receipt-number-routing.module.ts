import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodsReceiptNumberComponent } from './goods-receipt-number.component';

const routes: Routes = [{ path: '', component: GoodsReceiptNumberComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodsReceiptNumberRoutingModule { }
