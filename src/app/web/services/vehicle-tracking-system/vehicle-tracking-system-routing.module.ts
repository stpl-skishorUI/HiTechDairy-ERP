import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleTrackingSystemComponent } from './vehicle-tracking-system.component';

const routes: Routes = [{ path: '', component: VehicleTrackingSystemComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleTrackingSystemRoutingModule { }
