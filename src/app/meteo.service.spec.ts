import { TestBed } from '@angular/core/testing';

import { MeteoService } from './service/meteo.service';

describe('MeteoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeteoService = TestBed.get(MeteoService);
    expect(service).toBeTruthy();
  });
});
