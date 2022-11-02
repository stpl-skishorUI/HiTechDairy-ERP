import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryMasterComponent } from './category-master.component';

const routes: Routes = [{ path: '', component: CategoryMasterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryMasterRoutingModule { }
