import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutomaticMilkCollectionUnitComponent } from './automatic-milk-collection-unit.component';

const routes: Routes = [{ path: '', component: AutomaticMilkCollectionUnitComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutomaticMilkCollectionUnitRoutingModule { }
