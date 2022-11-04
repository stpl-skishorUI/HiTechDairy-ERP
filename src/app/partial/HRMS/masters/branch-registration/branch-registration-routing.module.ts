import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchRegistrationComponent } from './branch-registration.component';

const routes: Routes = [{ path: '', component: BranchRegistrationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchRegistrationRoutingModule { }
