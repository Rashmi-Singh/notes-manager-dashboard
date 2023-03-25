import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTextNoteComponent } from './add-text-note.component';

describe('AddTextNoteComponent', () => {
  let component: AddTextNoteComponent;
  let fixture: ComponentFixture<AddTextNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTextNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTextNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
