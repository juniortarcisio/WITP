import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarWordsComponent } from './similar-words.component';

describe('SimilarWordsComponent', () => {
  let component: SimilarWordsComponent;
  let fixture: ComponentFixture<SimilarWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
