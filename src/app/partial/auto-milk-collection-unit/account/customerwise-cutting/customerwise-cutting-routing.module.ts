import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerwiseCuttingComponent } from './customerwise-cutting.component';

const routes: Routes = [{ path: '', component: CustomerwiseCuttingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerwiseCuttingRoutingModule { }
