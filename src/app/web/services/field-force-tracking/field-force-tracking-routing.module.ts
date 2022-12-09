import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FieldForceTrackingComponent } from './field-force-tracking.component';

const routes: Routes = [{ path: '', component: FieldForceTrackingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FieldForceTrackingRoutingModule { }
