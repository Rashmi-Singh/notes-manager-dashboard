import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteListItem } from '../../models';

@Component({
  selector: 'app-notes-table',
  templateUrl: './notes-table.component.html',
  styleUrls: ['./notes-table.component.scss']
})
export class NotesTableComponent implements OnInit {

  @Input() notesList: NoteListItem[] = [];
  @Input() displayedColumns: string[] = [];
  @Output() onDelete: EventEmitter<number>;

  constructor() {
    this.onDelete = new EventEmitter();
  }

  ngOnInit(): void {
  }

  isFileType(item: NoteListItem, column: string): boolean {
    return column === 'file' && !!item.file.name;
  }

  deleteNote(index: number) {
    this.onDelete.emit(index);
  }
}
