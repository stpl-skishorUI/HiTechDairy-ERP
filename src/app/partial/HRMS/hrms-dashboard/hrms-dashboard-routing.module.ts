import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrmsDashboardComponent } from './hrms-dashboard.component';

const routes: Routes = [{ path: '', component: HrmsDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrmsDashboardRoutingModule { }
