import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocMilkCollectionComponent } from './doc-milk-collection.component';

const routes: Routes = [{ path: '', component: DocMilkCollectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocMilkCollectionRoutingModule { }
