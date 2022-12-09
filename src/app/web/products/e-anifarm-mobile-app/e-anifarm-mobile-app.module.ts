import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EAnifarmMobileAppRoutingModule } from './e-anifarm-mobile-app-routing.module';
import { EAnifarmMobileAppComponent } from './e-anifarm-mobile-app.component';


@NgModule({
  declarations: [
    EAnifarmMobileAppComponent
  ],
  imports: [
    CommonModule,
    EAnifarmMobileAppRoutingModule
  ]
})
export class EAnifarmMobileAppModule { }
