import { TestBed } from '@angular/core/testing';

import { ParagrafosService } from './paragrafos.service';

describe('ParagrafosService', () => {
  let service: ParagrafosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParagrafosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
