import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPictureNoteComponent } from './add-picture-note.component';

describe('AddPictureNoteComponent', () => {
  let component: AddPictureNoteComponent;
  let fixture: ComponentFixture<AddPictureNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPictureNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPictureNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
