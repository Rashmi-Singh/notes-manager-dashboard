import { createAction, props } from '@ngrx/store';
import { DocumentNote } from '../../models';

export const addNote = createAction('[DocumentNotes] addNote', props<{note: DocumentNote}>());
export const deleteNote = createAction('[DocumentNotes] deleteNote', props<{index: number}>());