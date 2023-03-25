import { Action, createReducer, on } from '@ngrx/store';
import { TextNote } from '../text-notes.model';
import { addNote, deleteNote } from './text-notes.actions';
import { initialState } from './text-notes.state';

const _textNotesReducer = createReducer(initialState,
    on(addNote, (state, action) => {
        let lastIndex = [...state.textNotes].pop()?.id ?? 0;
        const newNote = {
            id: lastIndex + 1,
            description: action.note.description,
        };
        return {
            ...state,
            textNotes: [...state.textNotes, newNote],
        };
    }),
    on(deleteNote, (state, action) => {
        return {
            ...state,
            textNotes: state.textNotes.filter(item => item.id !== action.index),
        };
    }),
);

export function textNotesReducer(state: { textNotes: TextNote[]; }, action: Action) {
    return _textNotesReducer(state, action);
}