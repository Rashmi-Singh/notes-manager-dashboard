import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteNote } from './state/text-notes.actions';
import { TextNote } from './text-notes.model';

@Component({
    selector: 'app-text-notes',
    templateUrl: './text-notes.component.html',
})

export class TextNotesComponent implements OnInit {
    showAddForm: boolean = false;
    notesList: TextNote[] = [];

    constructor(private store: Store<{ textNotesReducer: { textNotes: TextNote[] } }>) {
    }

    ngOnInit() {
        this.store.select('textNotesReducer').subscribe((data) => {
            this.notesList = data.textNotes;
        });
    }

    deleteNote(index: number = 0) {
        if (index) this.store.dispatch(deleteNote({index}));
    }
}
