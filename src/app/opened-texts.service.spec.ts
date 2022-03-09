import { TestBed } from '@angular/core/testing';

import { OpenedTextsService } from './opened-texts.service';

describe('OpenedTextsService', () => {
  let service: OpenedTextsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenedTextsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
