import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { routes } from './text-notes.routes';
import { AppMaterialModule } from '../main-material.module';
import { SharedModule } from '../shared/shared.module';

import { TextNotesComponent } from './text-notes.component';
import { AddTextNoteComponent } from './add-text-note/add-text-note.component';
import { textNotesReducer } from './state/text-notes.reducer';

@NgModule({
  declarations: [
    AddTextNoteComponent,
    TextNotesComponent,
  ],
  imports: [
    AppMaterialModule,
    CommonModule,
		RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('textNotesReducer', textNotesReducer)
  ]
})
export class TextNotesModule { }
