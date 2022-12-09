import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EAnifarmMobileAppComponent } from './e-anifarm-mobile-app.component';

const routes: Routes = [{ path: '', component: EAnifarmMobileAppComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EAnifarmMobileAppRoutingModule { }
