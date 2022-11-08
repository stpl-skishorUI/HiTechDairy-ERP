import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultRatecardAssignmentComponent } from './default-ratecard-assignment.component';

const routes: Routes = [{ path: '', component: DefaultRatecardAssignmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRatecardAssignmentRoutingModule { }
