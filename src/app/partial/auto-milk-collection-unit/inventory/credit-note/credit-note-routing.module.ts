import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditNoteComponent } from './credit-note.component';

const routes: Routes = [{ path: '', component: CreditNoteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditNoteRoutingModule { }
