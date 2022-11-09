import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteAllBillsComponent } from './delete-all-bills.component';

const routes: Routes = [{ path: '', component: DeleteAllBillsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeleteAllBillsRoutingModule { }
