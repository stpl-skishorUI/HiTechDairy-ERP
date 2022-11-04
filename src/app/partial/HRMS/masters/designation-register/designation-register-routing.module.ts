import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignationRegisterComponent } from './designation-register.component';

const routes: Routes = [{ path: '', component: DesignationRegisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignationRegisterRoutingModule { }
