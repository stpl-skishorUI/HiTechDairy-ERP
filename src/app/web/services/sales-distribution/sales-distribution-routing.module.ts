import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesDistributionComponent } from './sales-distribution.component';

const routes: Routes = [{ path: '', component: SalesDistributionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesDistributionRoutingModule { }
