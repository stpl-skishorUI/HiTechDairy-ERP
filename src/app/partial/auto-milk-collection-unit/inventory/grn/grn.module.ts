import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrnRoutingModule } from './grn-routing.module';
import { GrnComponent } from './grn.component';


@NgModule({
  declarations: [
    GrnComponent
  ],
  imports: [
    CommonModule,
    GrnRoutingModule
  ]
})
export class GrnModule { }
