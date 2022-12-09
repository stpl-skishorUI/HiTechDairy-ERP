import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteManagerComponent } from './route-manager.component';

const routes: Routes = [{ path: '', component: RouteManagerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteManagerRoutingModule { }
