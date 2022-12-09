import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EAnifarmDesktopRoutingModule } from './e-anifarm-desktop-routing.module';
import { EAnifarmDesktopComponent } from './e-anifarm-desktop.component';


@NgModule({
  declarations: [
    EAnifarmDesktopComponent
  ],
  imports: [
    CommonModule,
    EAnifarmDesktopRoutingModule
  ]
})
export class EAnifarmDesktopModule { }
