import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { PictureNote } from '../models';
import { NotesTableComponent } from '../shared/notes-table/notes-table.component';
import { NotesTableDirective } from '../shared/notes-table/notes-table.directive';
import { deleteNote } from './state/picture-notes.actions';

@Component({
    selector: 'app-picture-notes',
    templateUrl: './picture-notes.component.html',
})

export class PictureNotesComponent implements OnInit {
    showAddForm: boolean = false;
    notesList: PictureNote[] = [];
    displayedColumns: string[] = ['id', 'title', 'description', 'file', 'actions'];

    @ViewChild(NotesTableDirective) notesTableHost!: NotesTableDirective;

    constructor(
        private cdr: ChangeDetectorRef,
        private store: Store<{ pictureNotesReducer: { pictureNotes: PictureNote[] } }>,
    ) { }

    ngOnInit() {
        this.store.select('pictureNotesReducer').subscribe((data) => {
            this.notesList = data.pictureNotes;
            this.displayTable();
        });
    }

    ngAfterViewInit() {
        this.displayTable();
        this.cdr.detectChanges();
    }

    private displayTable() {
        const viewContainerRef = this.notesTableHost?.viewContainerRef;
        if (viewContainerRef) {
            viewContainerRef.clear();
            const componentRef = viewContainerRef.createComponent(NotesTableComponent);
            (componentRef.instance as NotesTableComponent).displayedColumns = this.displayedColumns;
            (componentRef.instance as NotesTableComponent).notesList = this.notesList;
            (componentRef.instance as NotesTableComponent).onDelete.subscribe(
                (data) => this.deleteNote(data),
            );
        }
    }

    private deleteNote(index: number) {
        this.store.dispatch(deleteNote({index}));
    }
}
