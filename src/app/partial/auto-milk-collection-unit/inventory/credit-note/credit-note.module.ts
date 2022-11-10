import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditNoteRoutingModule } from './credit-note-routing.module';
import { CreditNoteComponent } from './credit-note.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    CreditNoteComponent
  ],
  imports: [
    CommonModule,
    CreditNoteRoutingModule,
    MaterialModule
  ]
})
export class CreditNoteModule { }
