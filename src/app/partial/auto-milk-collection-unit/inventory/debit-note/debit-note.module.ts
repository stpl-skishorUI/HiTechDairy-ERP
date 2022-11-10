import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebitNoteRoutingModule } from './debit-note-routing.module';
import { DebitNoteComponent } from './debit-note.component';


@NgModule({
  declarations: [
    DebitNoteComponent
  ],
  imports: [
    CommonModule,
    DebitNoteRoutingModule
  ]
})
export class DebitNoteModule { }
