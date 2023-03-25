import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaxSizeValidator } from '@angular-material-components/file-input';
import { Store } from '@ngrx/store';

import { addNote } from '../state/picture-notes.actions';
import { FileUploadData } from 'src/app/models';

@Component({
  selector: 'app-add-picture-note',
  templateUrl: './add-picture-note.component.html',
})
export class AddPictureNoteComponent implements OnInit {

  pictureNoteFG: FormGroup;
  files: any;
  fileData: FileUploadData = {
    accept: 'image/*',
    color: 'primary',
    disabled: false,
    maxSize: 50,
    multiple: false,
  };

  constructor(private formBuilder: FormBuilder, private store: Store) {
    this.pictureNoteFG = this.formBuilder.group({
      description: ['', Validators.required],
      file: [this.files, [Validators.required, MaxSizeValidator(this.fileData.maxSize * 1024)]],
      imageURL: '',
      title: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.pictureNoteFG.controls['file'].valueChanges.subscribe((files: any) => {
      if (!Array.isArray(files)) {
        this.files = [files];
      } else {
        this.files = files;
      }
    })
  }

  saveFormData(event: boolean) {
    if (event) {
      this.store.dispatch(addNote({ note: this.pictureNoteFG.value }))
      this.pictureNoteFG.reset();
    }
  }
}
