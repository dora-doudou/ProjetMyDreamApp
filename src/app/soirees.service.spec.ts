import { TestBed } from '@angular/core/testing';

import { SoireesService } from './service/soirees.service';

describe('SoireesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoireesService = TestBed.get(SoireesService);
    expect(service).toBeTruthy();
  });
});
