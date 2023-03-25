import { createAction, props } from '@ngrx/store';
import { ArticleNote } from '../article-notes.model';

export const addNote = createAction('[ArticleNotes] addNote', props<{note: ArticleNote}>());

export const deleteNote = createAction('[ArticleNotes] deleteNote', props<{index: number}>());
