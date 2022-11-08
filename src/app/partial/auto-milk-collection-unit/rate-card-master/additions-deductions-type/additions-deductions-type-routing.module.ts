import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionsDeductionsTypeComponent } from './additions-deductions-type.component';

const routes: Routes = [{ path: '', component: AdditionsDeductionsTypeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdditionsDeductionsTypeRoutingModule { }
