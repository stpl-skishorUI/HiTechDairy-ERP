import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebitNoteRoutingModule } from './debit-note-routing.module';
import { DebitNoteComponent } from './debit-note.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    DebitNoteComponent
  ],
  imports: [
    CommonModule,
    DebitNoteRoutingModule,
    MaterialModule
  ]
})
export class DebitNoteModule { }
