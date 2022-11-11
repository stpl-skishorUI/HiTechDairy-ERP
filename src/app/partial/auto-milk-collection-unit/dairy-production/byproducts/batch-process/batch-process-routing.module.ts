import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchProcessComponent } from './batch-process.component';

const routes: Routes = [{ path: '', component: BatchProcessComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatchProcessRoutingModule { }
