import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../main-material.module';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { NotesTableComponent } from './notes-table/notes-table.component';
import { NotesTableDirective } from './notes-table/notes-table.directive';

@NgModule({
  declarations: [
    ButtonGroupComponent,
    FileUploadComponent,
    NotesTableComponent,
    NotesTableDirective,
  ],
  exports: [
    ButtonGroupComponent,
    FileUploadComponent,
    NotesTableDirective,
  ],
  imports: [
    AppMaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
