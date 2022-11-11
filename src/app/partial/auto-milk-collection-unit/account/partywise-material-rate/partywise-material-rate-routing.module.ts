import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartywiseMaterialRateComponent } from './partywise-material-rate.component';

const routes: Routes = [{ path: '', component: PartywiseMaterialRateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartywiseMaterialRateRoutingModule { }
