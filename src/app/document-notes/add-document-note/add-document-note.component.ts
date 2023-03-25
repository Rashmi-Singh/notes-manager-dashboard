import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaxSizeValidator } from '@angular-material-components/file-input';
import { ThemePalette } from '@angular/material/core';
import { Store } from '@ngrx/store';

import { addNote } from '../state/document-notes.actions';
import { FileUploadData } from 'src/app/models';

@Component({
  selector: 'app-add-document-note',
  templateUrl: './add-document-note.component.html',
})
export class AddDocumentNoteComponent implements OnInit {

  documentNoteFG: FormGroup;
  files: any;
  fileData: FileUploadData = {
    accept: '.doc,.docx,.xml,application/msword,.pdf',
    color: 'primary',
    disabled: false,
    maxSize: 50,
    multiple: false,
  };

  constructor(private formBuilder: FormBuilder, private store: Store) {
    this.documentNoteFG = this.formBuilder.group({
      file: [this.files, [Validators.required, MaxSizeValidator(this.fileData.maxSize * 1024)]],
      documentType: ['', Validators.required],
      title: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.documentNoteFG.controls['file'].valueChanges.subscribe((files: any) => {
      if (!Array.isArray(files)) {
        this.files = [files];
      } else {
        this.files = files;
      }
    })
  }

  saveFormData(event: boolean) {
    if (event) {
      this.store.dispatch(addNote({note: this.documentNoteFG.value}))
      this.documentNoteFG.reset();
    }
  }
}
