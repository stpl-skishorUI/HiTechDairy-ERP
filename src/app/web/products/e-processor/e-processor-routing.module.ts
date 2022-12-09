import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EProcessorComponent } from './e-processor.component';

const routes: Routes = [{ path: '', component: EProcessorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EProcessorRoutingModule { }
