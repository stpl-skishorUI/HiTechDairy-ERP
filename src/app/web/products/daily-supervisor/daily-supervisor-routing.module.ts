import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailySupervisorComponent } from './daily-supervisor.component';

const routes: Routes = [{ path: '', component: DailySupervisorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailySupervisorRoutingModule { }
