import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyAccountRegistrationComponent } from './company-account-registration.component';

const routes: Routes = [{ path: '', component: CompanyAccountRegistrationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyAccountRegistrationRoutingModule { }
