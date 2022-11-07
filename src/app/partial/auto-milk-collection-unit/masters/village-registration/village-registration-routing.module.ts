import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VillageRegistrationComponent } from './village-registration.component';

const routes: Routes = [{ path: '', component: VillageRegistrationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillageRegistrationRoutingModule { }
