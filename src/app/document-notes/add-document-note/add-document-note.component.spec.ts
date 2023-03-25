import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDocumentNoteComponent } from './add-document-note.component';

describe('AddDocumentNoteComponent', () => {
  let component: AddDocumentNoteComponent;
  let fixture: ComponentFixture<AddDocumentNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDocumentNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDocumentNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
