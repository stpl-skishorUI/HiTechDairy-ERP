import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MilkCollectionReportComponent } from './milk-collection-report.component';

const routes: Routes = [{ path: '', component: MilkCollectionReportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MilkCollectionReportRoutingModule { }
