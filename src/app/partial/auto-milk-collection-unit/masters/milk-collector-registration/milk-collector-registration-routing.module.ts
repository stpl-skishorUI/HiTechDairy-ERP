import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MilkCollectorRegistrationComponent } from './milk-collector-registration.component';

const routes: Routes = [{ path: '', component: MilkCollectorRegistrationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MilkCollectorRegistrationRoutingModule { }
