import { Action, createReducer, on } from '@ngrx/store';
import { ArticleNote } from '../article-notes.model';
import { addNote, deleteNote } from './article-notes.actions';
import { initialState } from './article-notes.state';

const _articleNotesReducer = createReducer(initialState,
    on(addNote, (state, action) => {
        let lastIndex = [...state.articleNotes].pop()?.id ?? 0;
        const newNote = {
            id: lastIndex + 1,
            description: action.note.description,
            title: action.note.title,
        };
        return {
            ...state,
            articleNotes: [...state.articleNotes, newNote],
        };
    }),
    on(deleteNote, (state, action) => {
        return {
            ...state,
            articleNotes: state.articleNotes.filter(item => item.id !== action.index),
        };
    }),
);

export function articleNotesReducer(state: { articleNotes: ArticleNote[]; }, action: Action) {
    return _articleNotesReducer(state, action);
}