import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankRegisterComponent } from './bank-register.component';

const routes: Routes = [{ path: '', component: BankRegisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankRegisterRoutingModule { }
