import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RateChartRegistrationComponent } from './rate-chart-registration.component';

const routes: Routes = [{ path: '', component: RateChartRegistrationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RateChartRegistrationRoutingModule { }
