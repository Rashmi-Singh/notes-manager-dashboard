import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ArticleNote } from './article-notes.model';
import { deleteNote } from './state/article-notes.actions';

@Component({
    selector: 'app-article-notes',
    templateUrl: './article-notes.component.html',
})

export class ArticleNotesComponent implements OnInit {
    showAddForm: boolean = false;
    notesList: ArticleNote[] = [];

    constructor(private store: Store<{ articleNotesReducer: { articleNotes: ArticleNote[] } }>) {}

    ngOnInit() {
        this.store.select('articleNotesReducer').subscribe((data) => {
            this.notesList = data.articleNotes;
        });
    }

    deleteNote(index: number = 0) {
        if (index) this.store.dispatch(deleteNote({index}));
    }
}
