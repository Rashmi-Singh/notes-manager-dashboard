import { ThemePalette } from "@angular/material/core";

export interface FileUploadData {
    maxSize: number;
    color: ThemePalette;
    disabled: boolean;
    multiple: boolean;
    accept: string;
}

export interface DocumentNote {
    file: File;
    documentType: string;
    id?: number;
    imageURL: string;
    title: string;
}

export interface PictureNote {
    description: string;
    id?: number;
    imageURL: string;
    file: File;
    title: string;
}

export type NoteListItem = DocumentNote | PictureNote;
