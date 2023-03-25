import { createAction, props } from '@ngrx/store';
import { TextNote } from '../text-notes.model';

export const addNote = createAction('[TextNotes] addNote', props<{note: TextNote}>());

export const deleteNote = createAction('[TextNotes] deleteNote', props<{index: number}>());