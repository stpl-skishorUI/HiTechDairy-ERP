import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MilkCollectionListComponent } from './milk-collection-list.component';

const routes: Routes = [{ path: '', component: MilkCollectionListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MilkCollectionListRoutingModule { }
