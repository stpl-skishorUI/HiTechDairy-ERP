import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchTemplateComponent } from './batch-template.component';

const routes: Routes = [{ path: '', component: BatchTemplateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatchTemplateRoutingModule { }
