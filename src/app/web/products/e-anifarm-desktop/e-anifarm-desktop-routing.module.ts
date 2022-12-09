import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EAnifarmDesktopComponent } from './e-anifarm-desktop.component';

const routes: Routes = [{ path: '', component: EAnifarmDesktopComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EAnifarmDesktopRoutingModule { }
