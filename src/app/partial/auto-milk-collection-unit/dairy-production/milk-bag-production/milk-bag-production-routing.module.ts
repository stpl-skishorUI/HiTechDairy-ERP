import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MilkBagProductionComponent } from './milk-bag-production.component';

const routes: Routes = [{ path: '', component: MilkBagProductionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MilkBagProductionRoutingModule { }
