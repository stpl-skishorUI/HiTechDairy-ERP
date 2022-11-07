import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemTransferRoutingModule } from './item-transfer-routing.module';
import { ItemTransferComponent } from './item-transfer.component';
import { MaterialModule} from 'src/app/shared/angularMaterialModule/material.module';
import { ItemTransferFormComponent } from './item-transfer-form/item-transfer-form.component';

@NgModule({
  declarations: [
    ItemTransferComponent,
    ItemTransferFormComponent
  ],
  imports: [
    CommonModule,
    ItemTransferRoutingModule,
    MaterialModule
  ]
})
export class ItemTransferModule { }
