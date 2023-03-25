import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addNote } from '../state/text-notes.actions';

@Component({
  selector: 'app-add-text-note',
  templateUrl: './add-text-note.component.html',
})
export class AddTextNoteComponent {

  textNoteFG: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store) {
    this.textNoteFG = this.formBuilder.group({
      description: ['', [Validators.required]]
    });
  }

  saveFormData(event: boolean) {
    if (event) {
      this.store.dispatch(addNote({note: this.textNoteFG.value}))
      this.textNoteFG.reset();
    }
  }
}
