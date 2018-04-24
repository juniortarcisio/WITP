import { TestBed, inject } from '@angular/core/testing';

import { GrammarService } from './grammar.service';

describe('GrammarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GrammarService]
    });
  });

  it('should be created', inject([GrammarService], (service: GrammarService) => {
    expect(service).toBeTruthy();
  }));
});
