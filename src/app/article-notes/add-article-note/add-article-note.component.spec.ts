import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArticleNoteComponent } from './add-article-note.component';

describe('AddArticleNoteComponent', () => {
  let component: AddArticleNoteComponent;
  let fixture: ComponentFixture<AddArticleNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddArticleNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddArticleNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
