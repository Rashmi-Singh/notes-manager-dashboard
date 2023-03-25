import { createAction, props } from '@ngrx/store';
import { PictureNote } from '../../models';

export const addNote = createAction('[PictureNotes] addNote', props<{note: PictureNote}>());
export const deleteNote = createAction('[PictureNotes] deleteNote', props<{index: number}>());