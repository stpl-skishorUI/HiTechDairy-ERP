import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EVetMobileRoutingModule } from './e-vet-mobile-routing.module';
import { EVetMobileComponent } from './e-vet-mobile.component';


@NgModule({
  declarations: [
    EVetMobileComponent
  ],
  imports: [
    CommonModule,
    EVetMobileRoutingModule
  ]
})
export class EVetMobileModule { }
