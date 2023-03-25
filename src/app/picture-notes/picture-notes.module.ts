import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { routes } from './picture-notes.routes';
import { AppMaterialModule } from '../main-material.module';
import { SharedModule } from '../shared/shared.module';

import { PictureNotesComponent } from './picture-notes.component';
import { AddPictureNoteComponent } from './add-picture-note/add-picture-note.component';
import { pictureNotesReducer } from './state/picture-notes.reducer';

@NgModule({
  declarations: [
    PictureNotesComponent,
    AddPictureNoteComponent,
  ],
  imports: [
    AppMaterialModule,
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('pictureNotesReducer', pictureNotesReducer),
  ]
})
export class PictureNotesModule { }
