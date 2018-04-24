import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordAlbumsComponent } from './word-albums.component';

describe('WordAlbumsComponent', () => {
  let component: WordAlbumsComponent;
  let fixture: ComponentFixture<WordAlbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordAlbumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
