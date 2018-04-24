import { TestBed, inject } from '@angular/core/testing';

import { VocabularyService } from './vocabulary.service';

describe('VocabularyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VocabularyService]
    });
  });

  it('should be created', inject([VocabularyService], (service: VocabularyService) => {
    expect(service).toBeTruthy();
  }));
});
