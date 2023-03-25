import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { routes } from './article-notes.routes';
import { AppMaterialModule } from '../main-material.module';
import { SharedModule } from '../shared/shared.module';

import { ArticleNotesComponent } from './article-notes.component';
import { AddArticleNoteComponent } from './add-article-note/add-article-note.component';
import { articleNotesReducer } from './state/article-notes.reducer';

@NgModule({
  declarations: [
    ArticleNotesComponent,
    AddArticleNoteComponent,
  ],
  imports: [
    AppMaterialModule,
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('articleNotesReducer', articleNotesReducer),
  ]
})
export class ArticleNotesModule { }
