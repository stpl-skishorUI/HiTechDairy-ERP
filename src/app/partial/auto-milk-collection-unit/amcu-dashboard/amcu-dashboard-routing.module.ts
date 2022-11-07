import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmcuDashboardComponent } from './amcu-dashboard.component';

const routes: Routes = [{ path: '', component: AmcuDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmcuDashboardRoutingModule { }
