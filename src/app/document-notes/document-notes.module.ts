import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { routes } from './document-notes.routes';
import { AppMaterialModule } from '../main-material.module';
import { SharedModule } from '../shared/shared.module';

import { DocumentNotesComponent } from './document-notes.component';
import { AddDocumentNoteComponent } from './add-document-note/add-document-note.component';
import { documentNotesReducer } from './state/document-notes.reducer';

@NgModule({
  declarations: [
    DocumentNotesComponent,
    AddDocumentNoteComponent,
  ],
  imports: [
    AppMaterialModule,
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('documentNotesReducer', documentNotesReducer),
  ]
})
export class DocumentNotesModule { }
