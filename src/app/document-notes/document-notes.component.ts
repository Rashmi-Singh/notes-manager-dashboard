import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { DocumentNote } from '../models';
import { NotesTableComponent } from '../shared/notes-table/notes-table.component';
import { NotesTableDirective } from '../shared/notes-table/notes-table.directive';
import { deleteNote } from './state/document-notes.actions';

@Component({
    selector: 'app-document-notes',
    templateUrl: './document-notes.component.html',
})

export class DocumentNotesComponent implements OnInit, AfterViewInit {
    showAddForm: boolean = false;
    notesList: DocumentNote[] = [];
    displayedColumns: string[] = ['id', 'title', 'documentType', 'file', 'actions'];

    @ViewChild(NotesTableDirective) notesTableHost!: NotesTableDirective;

    constructor(
        private cdr: ChangeDetectorRef,
        private store: Store<{ documentNotesReducer: { documentNotes: DocumentNote[] } }>,
    ) { }

    ngOnInit() {
        this.store.select('documentNotesReducer').subscribe((data) => {
            this.notesList = data.documentNotes;
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
