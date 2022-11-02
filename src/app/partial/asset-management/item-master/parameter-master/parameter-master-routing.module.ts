import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParameterMasterComponent } from './parameter-master.component';

const routes: Routes = [{ path: '', component: ParameterMasterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParameterMasterRoutingModule { }
