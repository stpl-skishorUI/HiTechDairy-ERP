import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditNoteRoutingModule } from './credit-note-routing.module';
import { CreditNoteComponent } from './credit-note.component';


@NgModule({
  declarations: [
    CreditNoteComponent
  ],
  imports: [
    CommonModule,
    CreditNoteRoutingModule
  ]
})
export class CreditNoteModule { }
