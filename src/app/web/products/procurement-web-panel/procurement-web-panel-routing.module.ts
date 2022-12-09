import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcurementWebPanelComponent } from './procurement-web-panel.component';

const routes: Routes = [{ path: '', component: ProcurementWebPanelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcurementWebPanelRoutingModule { }
