import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyRegisterComponent } from './company-register.component';

const routes: Routes = [{ path: '', component: CompanyRegisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRegisterRoutingModule { }
