import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionsDeductionsChargesComponent } from './additions-deductions-charges.component';

const routes: Routes = [{ path: '', component: AdditionsDeductionsChargesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdditionsDeductionsChargesRoutingModule { }
