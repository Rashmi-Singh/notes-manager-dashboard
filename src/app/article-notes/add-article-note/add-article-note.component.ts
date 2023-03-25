import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addNote } from '../state/article-notes.actions';

@Component({
  selector: 'app-add-article-note',
  templateUrl: './add-article-note.component.html',
})
export class AddArticleNoteComponent {
  
  articleNoteFG: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store) {
    this.articleNoteFG = this.formBuilder.group({
      description: ['', [Validators.required]],
      title: ['', Validators.required],
    });
  }

  saveFormData(event: boolean) {
    if (event) {
      this.store.dispatch(addNote({note: this.articleNoteFG.value}))
      this.articleNoteFG.reset();
    }
  }
}
