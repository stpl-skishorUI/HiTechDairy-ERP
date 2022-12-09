import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EVetMobileComponent } from './e-vet-mobile.component';

const routes: Routes = [{ path: '', component: EVetMobileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EVetMobileRoutingModule { }
