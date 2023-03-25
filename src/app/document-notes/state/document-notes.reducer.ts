import { Action, createReducer, on } from '@ngrx/store';
import { DocumentNote } from '../../models';
import { addNote, deleteNote } from './document-notes.actions';
import { initialState } from './document-notes.state';

const _documentNotesReducer = createReducer(initialState,
    on(addNote, (state, action) => {
        const lastIndex = [...state.documentNotes].pop()?.id ?? 0;
        const newNote = {
            id: lastIndex + 1,
            file: action.note.file,
            imageURL: action.note.imageURL,
            documentType: action.note.documentType,
            title: action.note.title,
        };
        return {
            ...state,
            documentNotes: [...state.documentNotes, newNote],
        };
    }),
    on(deleteNote, (state, action) => {
        return {
            ...state,
            documentNotes: state.documentNotes.filter(item => item.id !== action.index),
        };
    }),
);

export function documentNotesReducer(state: { documentNotes: DocumentNote[]; }, action: Action) {
    return _documentNotesReducer(state, action);
}