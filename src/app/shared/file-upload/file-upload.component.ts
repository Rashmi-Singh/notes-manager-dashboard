import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FileUploadData } from '../../models';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
})
export class FileUploadComponent {

  @Input()
  data: FileUploadData = {
    accept: '',
    color: 'primary',
    disabled: false,
    maxSize: 50,
    multiple: false,
  };

  @Input()
  form!: FormGroup;
  @Input()
  controlName!: string;

  get control() {
    return this.form.controls[this.controlName] as FormControl;
  }
  constructor() { }

  setPreviewURL(event: Blob) {
    const file = event;
    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.form.patchValue({
        imageURL: reader.result as string,
      });
      this.form.get('imageURL')?.updateValueAndValidity();
    }
    if (file) {
      reader.readAsDataURL(file);
    }
  }
}
