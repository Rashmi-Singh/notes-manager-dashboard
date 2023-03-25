import { Action, createReducer, on } from '@ngrx/store';
import { PictureNote } from '../../models';
import { addNote, deleteNote } from './picture-notes.actions';
import { initialState } from './picture-notes.state';

const _pictureNotesReducer = createReducer(initialState,
    on(addNote, (state, action) => {
        let lastIndex = [...state.pictureNotes].pop()?.id ?? 0;
        const newNote = {
            id: lastIndex + 1,
            description: action.note.description,
            file: action.note.file,
            imageURL: action.note.imageURL,
            title: action.note.title,
        };
        return {
            ...state,
            pictureNotes: [...state.pictureNotes, newNote],
        };
    }),
    on(deleteNote, (state, action) => {
        return {
            ...state,
            pictureNotes: state.pictureNotes.filter(item => item.id !== action.index),
        };
    }),
);

export function pictureNotesReducer(state: { pictureNotes: PictureNote[]; }, action: Action) {
    return _pictureNotesReducer(state, action);
}