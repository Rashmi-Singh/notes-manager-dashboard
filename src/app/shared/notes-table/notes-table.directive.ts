import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appNotesTable]'
})

export class NotesTableDirective {
	constructor(public viewContainerRef: ViewContainerRef) {}
}
