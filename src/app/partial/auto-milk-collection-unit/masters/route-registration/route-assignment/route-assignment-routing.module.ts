import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteAssignmentComponent } from './route-assignment.component';

const routes: Routes = [{ path: '', component: RouteAssignmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteAssignmentRoutingModule { }
