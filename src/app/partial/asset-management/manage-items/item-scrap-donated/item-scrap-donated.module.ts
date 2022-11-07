import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemScrapDonatedRoutingModule } from './item-scrap-donated-routing.module';
import { ItemScrapDonatedComponent } from './item-scrap-donated.component';
import {MaterialModule} from 'src/app/shared/angularMaterialModule/material.module';
import { ItemScrapDonatedFormComponent } from './item-scrap-donated-form/item-scrap-donated-form.component'

@NgModule({
  declarations: [
    ItemScrapDonatedComponent,
    ItemScrapDonatedFormComponent
  ],
  imports: [
    CommonModule,
    ItemScrapDonatedRoutingModule,
    MaterialModule
  ]
})
export class ItemScrapDonatedModule { }
