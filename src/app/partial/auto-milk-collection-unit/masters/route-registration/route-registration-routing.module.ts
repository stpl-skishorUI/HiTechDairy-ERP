import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteRegistrationComponent } from './route-registration.component';

const routes: Routes = [{ path: '', component: RouteRegistrationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteRegistrationRoutingModule { }
