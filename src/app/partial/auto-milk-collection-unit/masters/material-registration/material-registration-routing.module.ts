import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialRegistrationComponent } from './material-registration.component';

const routes: Routes = [{ path: '', component: MaterialRegistrationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRegistrationRoutingModule { }
